import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from  'validator'

//login user

const loginUser=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await userModel.findOne({email});
        //if user is available or not
        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }
        //if the password is correct or not
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Wrong Password"})
        }
        const token=createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//creating token

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const{name,password,email}=req.body;
    try {
        //checking user allready exist
        const exist=await userModel.findOne({email})
        if(exist){
            return res.json({success:false,message:"User Already Exist!"})
        }
        //validating emailformat and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please provide valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please provide a strong password"})
        }
        
        //hashing user password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        //new user creating

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })
        const user= await newUser.save()
        const token =createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error"})  
    }
}

export {loginUser,registerUser}
