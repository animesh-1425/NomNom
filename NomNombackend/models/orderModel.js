import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    data:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}

})

const foodModel=mongoose.models.food|| mongoose.model("orders",orderSchema)

//if the model is present then ok but if not a new model will be created in the database with the schema

export default foodModel;