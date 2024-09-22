import mongoose from "mongoose";
const foodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},

})

const foodModel=mongoose.models.food|| mongoose.model("food",foodSchema)
//if the model is present then ok but if not a new model will be created in the database with the schema

export default foodModel;