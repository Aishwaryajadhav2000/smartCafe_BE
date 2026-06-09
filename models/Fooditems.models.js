import mongoose from "mongoose";

const foodModel = new mongoose.Schema({
    description : {
        type : String
    },
    foodname : {
        type: String
    },
    foodprice :{
        type : Number
    },
    fooddiscount : {
        type : Number
    },
    foodfinalprice : {
        type : Number
    }
});


const foodSchema = mongoose.model("fooditems" , foodModel);
export default foodSchema;

