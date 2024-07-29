import { comparePaasword, hashPassword } from "../helpers/authHelper.js";
import UserModel from "../models/user.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    if (!name) {
      return res.send({
        message: "Name missing",
      });
    }
    if (!email) {
      return res.send({
        message: "email missing",
      });
    }
    if (!password) {
      return res.send({
        message: "password missing",
      });
    }
    if (!phone) {
      return res.send({
        message: "phone number missing",
      });
    }
    if (!address) {
      return res.send({
        message: "address missing",
      });
    }
    if (!answer) {
      return res.send({
        message: "security answer missing",
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered... Please Login",
      });
    }

    const hashedpassword = await hashPassword(password);
    const user = await new UserModel({
      name,
      email,
      phone,
      address,
      password: hashedpassword,
      answer
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
    });
  }
};

export const loginController = async (req, res) => {

  console.log('Hello World')

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email not registered",
      });
    }
    const match = await comparePaasword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};


export const forgotPasswordController = async (req,res) => {

  try {
    
    const {email,answer,newPassword} = req.body;
    if(!email){
      res.status(400).send({message: 'Email is missing'});
    }
    if(!answer){
      res.status(400).send({message: 'Security answer is missing'});
    }
    if(!newPassword){
      res.status(400).send({message: 'New Password is missing'});
    }

    const user = await UserModel.findOne({email,answer});
    if(!user){
      return res.status(200).send(
        {
          success: false,
          message: 'Invalid email or answer'
        }
      )
    }
    const hashed = await hashPassword(newPassword);
    await UserModel.findByIdAndUpdate(user._id,{password : hashed});
    res.status(200).send({
      success: true,
      message: 'Password Reset Successfully'
    })

    


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error
    })
  }


}

export const testController = (req, res) => {
  res.send("Protected Routes");
};
