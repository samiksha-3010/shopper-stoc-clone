

import jwt from "jsonwebtoken";
import UserModals from "../Modals/User.Modals.js";
import ProductModal from "../Modals/Product.Modal.js";


export const blockUser = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await UserModals.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });

        if (user) {
            return res.status(200).json({ success: true, message: "User bloacked Successfully", user: user })
        }
        throw new Error("Internal Error, Please try again.")

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}


export const unBlockUser = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await UserModals.findByIdAndUpdate(userId, { isBlocked: false }, { new: true });

        if (user) {
            return res.status(200).json({ success: true, message: "User unbloacked Successfully.", user: user })
        }
        throw new Error("Internal Error, Please try again.")

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}





export const blockProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await ProductModal.findByIdAndUpdate(productId, { isBlocked: true }, { new: true })

        if (product) {
            return res.status(200).json({ success: true, message: "product blocked successfully....", product: product })
        }

        throw new Error("Internal Error, Please try again.")

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}


export const unblockProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await ProductModal.findByIdAndUpdate(productId, { isBlocked: false }, { new: true })

        if (product) {
            return res.status(200).json({ success: true, message: "product unblocked successfully....", product: product })
        }

        throw new Error("Internal Error, Please try again.")

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}



export const  IsValidUser =  async(req,res,next)=>{
    try{

        
if (!token) return res.status(404).json({ status: "error", message: "Token is mandtory.." })

const decodedData = jwt.verify(token, process.env.JWT_SECRET)

if (!decodedData) {
    return res.status(404).json({ status: "error", message: "Token not valid." })
}

const userId = decodedData.userId;

const user = await UserModals.findById(userId);

if (!user) {
    return res.status(404).json({ message: "User not valid.", status: "error" })
}

next();
} catch (error) {
return res.status(500).json({ error: error.message, status: "error" })
}
}


export const verifyProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await ProductModal.findByIdAndUpdate(productId, { isVerified: true }, { new: true })

        if (product) {
            return res.status(200).json({ success: true, message: "product Successfully verified", product: product })
        }
        throw new Error("Internal Error, Please try again.")

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
// *******************************





export const getAllBuyers = async (req,res) =>{
    try{
        const { token } = req.body;

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ status: "error", message: "Token not valid." })
        }
// 4
        const userId = decodedData.userId;

        const yourProducts = await UserModals.find({ role:"Buyer" })

        // console.log( )

        if (yourProducts.length) {
            return res.status(200).json({ status: "success", user: yourProducts })
        }

        return res.status(404).json({ status: "error", message: "No Buyer found." })


    }  catch (error) {
        return res.status(500).json({ success: false, message: error })
    }

}





export const getAllSellers = async (req,res) =>{

    const { token } = req.body;

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    if (!decodedData) {
        return res.status(404).json({ status: "error", message: "Token not valid." })
    }
4
    const userId = decodedData.userId;

    const yourProducts = await UserModals.find({role:"Seller"})

    // console.log( )

    if (yourProducts.length) {
        return res.status(200).json({ status: "success", user: yourProducts })
    }

    return res.status(404).json({ status: "error", message: "No sellelr User found." })
    
}

export const getAllProducts =async (req,res) =>{
 
    const { token } = req.body;

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    if (!decodedData) {
        return res.status(404).json({ status: "error", message: "Token not valid." })
    }
4
    const userId = decodedData.userId;

    const yourProducts = await ProductModal.find({ })

    // console.log( )

    if (yourProducts.length) {
        return res.status(200).json({ status: "success", products: yourProducts })
    }

    return res.status(404).json({ status: "error", message: "No products found." })  
}

// *************************verify **********************

export const getverifiedProducts  =async (res,req)=>{
    try{
        const verifiedProducts = await ProductModal.find({isVerified: true})
        if(!verifiedProducts.length) {
          return  res.status(404).json({success:false,message:"No Verified Products"})
        }
    }catch (error){
        res.status(500).json({success: false,message:error})
    }
}
    

    export const getUnVerifiedProducts  =async (res,req)=>{
        try{
            const unverifiedProducts = await ProductModal.find({isVerified: false})
            if(!unverifiedProducts.length) {
              return res.status(404).json({success:false,message:"No unVerified Products..."})
            }

            return res.status(200).json({ success: "true", product:unverifiedProducts})

        }catch (error){
            res.status(500).json({success: false,message:error})
        }
    }


export const  getBlockedProducts =async (req,res) =>{
    try{
    const blockedProducts = await ProductModal.find({isBlocked:true})
    if(!blockedProducts.length){
        res.status(200).json({ success:false,message:"No Unblocked Product.."})
    }

    return res.status(200).json({ success: "true", product:blockedProducts})

   

    }catch(error){
        return res.status(500).json({success:"false",message: error})
    }  
}
