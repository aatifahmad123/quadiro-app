import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from '../ecommerce-app/routes/authRoute.js'
import categoryRoutes from '../ecommerce-app/routes/categoryRoutes.js'
import productRoutes from '../ecommerce-app/routes/productRoutes.js'
import cors from 'cors'
import path from 'path'

// configure dotenv
dotenv.config()

// databse connection
connectDB();

const app = express()

// middlewares
app.use(cors());
app.use(express.json()); // json data in body
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/dist/')));

// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product', productRoutes);

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to Ecommerce App</h1>')
// })

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`.bgGreen.black)
})