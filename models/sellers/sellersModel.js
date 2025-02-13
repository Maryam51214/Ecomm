import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const seller = mongoose.model("seller", sellerSchema);
export default seller