const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const auth = require("../middlewares/auth");
const {
    getItems,
    // getItemById,
    addItem,
    editItem, 
    deleteItem,
    searchProductsByPrice,
    searchProductsByCategory,
    searchAll, 
    searchProducts,
    sortProductsByPrice,
    sortProductsByAlphabet,
    sortProductsByDate,
    sortProductsByCategory,
    getItemByUserId

} = require("../controllers/productController");

app.use(cors());
// using the APIs
router.post("/api/products/add", auth, addItem);
router.put("/api/products/edit/:id", auth, editItem);

router.get("/api/products/", getItems);
router.get("/api/products/owner/:id", getItemByUserId);
// router.get("/api/products/:id", getItemById);

router.get("/api/products/search/:name", searchProducts);
router.get("/api/products/category/:category", searchProductsByCategory);

router.get("/api/products/sort/", sortProductsByPrice);
router.get("/api/products/sort/alphabet/", sortProductsByAlphabet);
router.get("/api/products/sort/date/", sortProductsByDate);
router.get("/api/products/sort/category/", sortProductsByCategory);




module.exports = router;
