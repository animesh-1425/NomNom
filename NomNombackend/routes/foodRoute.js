import express from 'express'
import { addFood,listfood,removefood } from '../controlers/foodController.js'
import multer from 'multer'

const foodRouter=express.Router();

//image storage

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const uploads=multer({
    storage:storage
})

foodRouter.post("/add",uploads.single("image"),addFood)

foodRouter.get("/list",listfood)
foodRouter.post("/remove",removefood)




export default foodRouter;