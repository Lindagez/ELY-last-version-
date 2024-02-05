const { json } = require('express');
const Product = require('../models/productModel');
const User = require("../models/userModel");
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');

// Set up multer for file uploads

const Storage = multer.diskStorage({
  destination: '../frontend/public/uploads/img',
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});


const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    }
    else {
      cb(new Error('Only images are allowed'));
    }
  }
}).array('images', 7);


// Set up routes for products

// Add products (logged in users only)
const addItem = (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err.message);
      }

      if (req.files.length === 0 || !req.files) {
        return res.status(400).send('No images uploaded or no files found');

      }
      if (req.files.length > 5) {
        return res.status(400).send('Too many images uploaded');
      }


      const imgArray = req.files.map((file) => {
        return {
          mimetype: file.mimetype,
          filename: file.filename,
        }
      });

      const product = new Product({
        name: req.body.name.toUpperCase(),
        unitPrice: req.body.unitPrice,
        description: req.body.description,
        images: imgArray,
        category: req.body.category,
        addedBy: req.user._id,
        addedByUsername: req.user.name,
        city: req.body.city,
        phone: req.body.phone,
        negotiable: req.body.negotiable,
        delivery: req.body.delivery
      })




      const p = await product.save();
      if (!p) {
        return json.status(400).send("Product not saved");
      }
      res.status(201).json({ product, message: 'Images uploaded successfully', imageUrl: `../uploads/img/${req.files[0].filename}` });

    })


  } catch (err) {
    res.status(500).send("Our side " + err);
  }
};

// GET all products
const getItems = async (req, res, next) => {
  try {
    const products = await Product.find().populate({ path: 'addedBy', select: 'name' }).select('-__v');
    res.status(200).json(products);

    // console.log(products);
    // for (let i = 0; i < products.length; i++) {
    //   console.log(products[i].addedBy.name);
    // }

    // send email to admin
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   secure: false,
    //   auth: {
    //     user: 'yoszewdu@gmail.com',
    //     pass: '"wemakeourownrules"-maxine!',
    //   },
    //   host: 'smtp.gmail.com',



    // });

    // console.log(transporter);
    // const mailOptions = {
    //   from: 'y@gmail.com',
    //   to: 'ym@example.com',
    //   subject: 'New product added',
    //   text: 'A new product has been added:',
    // };

    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.log('error' + err.message);
    //   } else {
    //     console.log(`Email sent successfully: ${info.response}`);
    //   }
    // }
    // );
  } catch (err) {
    next(err);
  }

};

const getItemByUserId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const products = await Product.find().populate({ path: 'addedBy', select: 'name' }).select('-__v');

    const filteredProducts = products.filter((product) => {
      if (product.addedBy._id.toString() === userId) {
        return product;
      }
    }
    );

    const newProducts = filteredProducts.map((product) => {
      return {
        name: product.name,
        unitPrice: product.unitPrice,
        description: product.description,
        images: product.images,
        category: product.category,
        addedBy: product.addedBy.name,
        city: product.city,
        phone: product.phone,
        negotiable: product.negotiable,
        delivery: product.delivery,
        dateAdded: product.dateAdded,
        id: product._id
      }
    }
    );
    res.status(200).json(newProducts);

  } catch (err) {
    next(err);
  }
};


// GET a product by ID
// const getItemById = async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) { res.send(product); }
//   } catch (err) {
//     next(err);
//   }
// };

// DELETE a product by ID (logged in users and owners of the product only)
const deleteItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user._id;
    const product = await Product.findOne({ _id: productId});
    if (!product) {
      return res.status(404).send("Product not found or unauthorized to delete.");
    }

    await Product.deleteOne({ _id: productId });
    res.send("Product Deleted");
  } catch (err) {
    next(err);
  }
};

// Edit a product by ID (logged in users and owners of the product only)
const editItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user._id;

    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).send("Product not found or unauthorized to edit.");
    }

    product.set(req.body);
    const updatedProduct = await product.save();

    res.send(updatedProduct);
  } catch (err) {
    next(err);
  }
};


// search products by name

const searchProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ name: req.params.name });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// search products by category

const searchProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// search products by price

const searchProductsByPrice = async (req, res, next) => {
  try {
    const products = await Product.find({ unitPrice: req.params.unitPrice });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// search 

const searchAll = async (req, res) => {
  try {
    const { name, category, dateAdded, minPrice, maxPrice, sortOption, sortOrder } = req.query;

    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }
    if (dateAdded) {
      filter.dateAdded = { $regex: dateAdded, $options: 'i' };
    }
    if (minPrice && maxPrice) {
      filter.unitPrice = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter.unitPrice = { $gte: minPrice };
    } else if (maxPrice) {
      filter.unitPrice = { $lte: maxPrice };
    }

    const sort = {};

    if (sortOption) {
      sort[sortOption] = sortOrder === 'desc' ? -1 : 1;
    }

    const products = await Product.find(filter).sort(sort);

    // const products = await Product.find(filter);

    res.status(200).send(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// sort products by price

const sortProductsByPrice = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ unitPrice: 1 });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// sort products by alphabet

const sortProductsByAlphabet = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// sort products by date

const sortProductsByDate = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ dateAdded: 1 });
    res.send(products);
  } catch (err) {
    next(err);
  }
}

// sort products by category

const sortProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ category: 1 });
    res.send(products);
  } catch (err) {
    next(err);
  }
}






module.exports = {
  getItems,
  // getItemById,
  getItemByUserId,
  deleteItem,
  addItem,
  editItem,
  searchProducts,
  searchProductsByCategory,
  searchProductsByPrice,
  searchAll,
  sortProductsByPrice,
  sortProductsByAlphabet,
  sortProductsByDate,
  sortProductsByCategory

}