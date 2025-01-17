import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"


//appconfig
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//dbconnection

connectdb();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send('Hi')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

