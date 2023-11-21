import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors"
import  { Login, Register, getCurrentUser } from './Controolers/User.Controolers.js';
import { addCart, addWishlist, getCartProducts, getWishlistProducts, removeCartProduct } from './Controolers/Buyer.controller.js';
import { addProduct, addToCart, allCartProducts, allProducts, deleteYourProduct, getSingleProductData, getYourProducts, updateYourProduct } from './Controolers/product.Controolers.js';
import { checkSeller, isAdmin, isValidUser } from './Meedleware/All.Meedleware.js';


const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())


app.get("/", (req, res) => {
    res.send("Working...")
})
app.post("/register", Register)
app.post("/login", Login)
app.post("/get-current-user",getCurrentUser )
app.post("/add-product", checkSeller, addProduct);
app.get("/all-products", allProducts);

// app.post("/get-number", getNumber)
// app.post("/send-otp", sendOtp)
// app.post("/verify-otp", verifyOtp)

app.post("/get-your-products", checkSeller, getYourProducts);
app.post("/update-your-product", checkSeller, updateYourProduct);
app.post("/add-cart", addToCart);

app.post("/get-single-product-data", getSingleProductData);

app.post("/add-to-cart", addCart);
app.post("/add-Wishlist", addWishlist);
app.post("/get-Wishlist-Products ", getWishlistProducts );

app.post("/all-cart-products", allCartProducts);
app.post("/get-Cart-Products", getCartProducts);
app.get("/remove-Cart-Product", removeCartProduct);
app.get("/valid-user", isAdmin, isValidUser);
app.post("/delete-your-product",checkSeller, deleteYourProduct);

// app.patch("/block-user", isAdmin, blockUser);
// app.post("/remove-cart-items", removeCartProduct );
// app.post("/checkout", checkOut);
// app.patch("/un-block-user", isAdmin, unBlockUser);
// app.patch("/block-product", isAdmin, blockProduct);
// app.patch("/un-block-product", isAdmin, unBlockProduct );
// app.patch("/verify-product", isAdmin, verifyProduct);
// app.get("/get-all-buyers", isAdmin, getAllBuyers ); 
// app.get("/get-all-sellers", isAdmin, getAllSellers); 
// app.get("/get-all-products", isAdmin, getAllProducts); 
// app.patch("/get-verify-product", isAdmin, getVerifiedProducts); 
// app.patch("/get-un-verify-product", isAdmin, getUnVerifiedProducts); 

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB.................")
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})