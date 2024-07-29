import productModel from "../models/productModel.js"
import fs from 'fs'
import slugify from 'slugify'


export const newProductController = async (req,res) => {
    try {

        const {name,description,price,category,quantity} = req.fields
        // const {photo} = req.files
        
        switch(true){
            case !name:
                return res.status(500).send({error: 'Name is required'})
            case !description:
                return res.status(500).send({error: 'Description is required'})
            case !price:
                return res.status(500).send({error: 'Price is required'})
            case !category:
                return res.status(500).send({error: 'Category is required'})
            case !quantity:
                return res.status(500).send({error: 'Quantity is required'})
            // case photo && photo.size > 1000000:
            //     return res.status(500).send({error: 'Photo Required(Not greater than 1MB)'})
        }

        const products = new productModel({...req.fields, slug: slugify(name)})
        // if(photo){
        //     products.photo.data = fs.readFileSync(photo.path)
        //     products.photo.contentType = photo.type
        // }

        await products.save()
        res.status(201).send({
            success: true,
            message: 'Product Created Successfully',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in product creation',
            error
        })
    }
}

export const getProductController = async (req,res) => {
    try {

        const products = await productModel.find({}).select("-photo").limit(10).sort({createdAt: -1});
        res.status(200).send({
            success: true,
            message:'Products fetched successfully',
            products
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in fetching products',
            error
        })
    }
}


export const getSingleProductController = async (req,res) => {
    try {
        
        const product = await productModel.findOne({slug: req.params.slug}).select("-photo")
        res.status(200).send({
            success: true,
            message:'Product fetched successfully',
            product
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in fetching product',
            error
        })
    }
}


export const getProductPhotoController = async (req,res) => {
    try {
        const product = await productModel.findById(req.params.id).select("photo")
        if(product.photo.data){
            res.set('Content-type',product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in fetching product photo',
            error
        })
    }
}


export const deleteProductController = async (req,res) => {
    try {
        
        await productModel.findByIdAndDelete(req.params.id).select("-photo")
        res.status(200).send({
            success: true,
            message:'Product deleted successfully',
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in deleting product',
            error
        })
    }
}

export const updateProductController = async (req,res) =>{

    try {

        const {name,slug,description,price,category,quantity, shipping} = req.fields
        const {photo} = req.files
        
        switch(true){
            case !name:
                return res.status(500).send({error: 'Name is required'})
            case !description:
                return res.status(500).send({error: 'Description is required'})
            case !price:
                return res.status(500).send({error: 'Price is required'})
            case !category:
                return res.status(500).send({error: 'Category is required'})
            case !quantity:
                return res.status(500).send({error: 'Quantity is required'})
            case photo && photo.size > 1000000:
                return res.status(500).send({error: 'Photo Required(Not greater than 1MB)'})
        }

        const products = await productModel.findByIdAndUpdate(req.params.id,
            {...req.fields,slug: slugify(name)}, {new: true}
        )
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }

        await products.save()
        res.status(201).send({
            success: true,
            message: 'Product Updated Successfully',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in product updation',
            error
        })
    }

}