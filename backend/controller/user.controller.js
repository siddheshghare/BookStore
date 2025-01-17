import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs"

export const signup= async(req,res)=>{

    try {
        const{name,email,password}=req.body
        const user= await User.findOne({email})
        if (user) {
            return res.status(400).json({message:"user already exist"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        const createdUser = await User.create(
            {
                name,
                email,
                password:hashPassword
            }
        )
        return res.status(201).json({users:{
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email,

        }})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
    }
}



export const login = async (req,res)=>{

    try {
        const {email,password}=req.body
        console.log(password);
        
        const  user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password,user.password)
        if (!user || !isMatch) {
            return res.status(400).json({message:"invalid email or password"})
            
        }
        else{
            res.status(201).json({message:"loged in successful",user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }
    } catch (error) {
        console.log(error.message);
        
    }

}