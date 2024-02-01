const mongoose = require("mongoose");

// Create a Mongoose schema for products

const imgSchema = new mongoose.Schema({
  filename: {
    type: String,
  },
  mimetype: {
    type: String,
  },
});


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [imgSchema],
    // required: true,
  },

  category: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    // required: true,
  },

  negotiable: {
    type: Boolean,
    // required: true,
  },

  delivery: {
    type: Boolean,
    // required: true,
  },

  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,

  },
  addedByUsername: {
    type: String,
    // required: true,
  },
  dateAdded: {
    // type: Date,
    // default: Date.now,
    type: Date,
    default: Date.now,
  },

});

productSchema.set("toJSON",
  {
    transform: (_, obj) => {
      obj.id = obj._id;
      delete obj._id;
      delete obj.__v;

    },
  })

// Create a Mongoose model for products
const Product = mongoose.model('Product', productSchema);

module.exports = Product;