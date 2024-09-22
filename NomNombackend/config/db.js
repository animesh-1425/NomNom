import mongoose from "mongoose";
export const connectdb=async()=>{
    mongoose.connect("mongodb+srv://animesh1425:animansh1425@cluster0.b25r1.mongodb.net/NomNom").then(()=>{
        console.log('db connected')
    });
}