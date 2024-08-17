const express = require("express");

const router = express.Router();

const userSignupController = require("../controller/signup");
const UserSigninController = require("../controller/signin");
const getuserController = require("../controller/getuser");
const getuserbyidController = require("../controller/getuserbyid");
const addproductController = require("../controller/addproduct");
const getcategoryController = require("../controller/getcategory");
const getproductsController = require("../controller/getproducts");
const getProductbyidController = require("../controller/productbyid");
const getproductbycategoryController = require("../controller/productsbycategory");
const editProductController = require("../controller/editproduct");
const deleteProductController = require("../controller/deleteproduct");
const addtoCartController = require("../controller/addtocart");
const cartproductsbyId = require("../controller/catproductsbyid");
const deletecartproductController = require("../controller/deletecartproducts");
const updatecartqtyController = require("../controller/updatecartquantity");
const decreasecartqtyController = require("../controller/decreasequantity");

router.post("/signup", userSignupController);
router.post("/signin", UserSigninController);
router.get("/getuser", getuserController);
router.get("/getuser/:id", getuserbyidController);
router.post("/addproduct", addproductController);
router.get("/getcategory", getcategoryController);
router.get("/getproducts", getproductsController);
router.get("/getproduct/:id", getProductbyidController);
router.get("/product/:category", getproductbycategoryController);
router.put("/editproduct/:id", editProductController);
router.delete("/deleteproduct/:id", deleteProductController);
router.post("/addtocart", addtoCartController);
router.get("/cartproducts/:id", cartproductsbyId);
router.delete("/deleteprofromcart/:id/:uid", deletecartproductController);
router.post("/updateqty", updatecartqtyController);
router.post("/decreaseqty", decreasecartqtyController);

module.exports = router;
