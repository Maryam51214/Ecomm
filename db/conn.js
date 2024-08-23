import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://maryamshah:maryamshah51214@cluster0.8rxgtvs.mongodb.net/Ecommerce");
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection



// Database link
// mongodb+srv://affaq020:Affaqkhan@cluster0.35jypcv.mongodb.net/lab-2-online-shop