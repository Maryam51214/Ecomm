import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
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

const buyer = mongoose.model("buyer", buyerSchema);
export default buyer