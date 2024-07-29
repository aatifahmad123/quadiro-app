import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify'

export const newCategoryController = async (req,res) =>{
    try {
        
        const {name} = req.body;
        if(!name){
            return res.send(401).send({
                success: false,
                message: 'Name is Required'
            })
        }

        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success: true,
                message: 'Category Already Exists'
            })
        }

        const category = await new categoryModel({name,slug: slugify(name)}).save()
        res.status(201).send({
            success: true,
            message: 'New Category Created',
            category
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Category',
            error
        })
    }
}

export const updateCategoryController = async (req,res) =>{
    try {
        const {name} = req.body;
        const {id} = req.params;
        const category = await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)},{new:true});
        res.status(200).send({
            success: true,
            message: 'Category Updated',
            category
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while updating',
            error
        })
    }
}

export const categoryController = async (req,res) => {
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
            success: true,
            message: 'All categories fetched successfully',
            category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while getting all categories',
            error
        })
    }
}


export const singleCategoryController = async (req,res) => {
    try {
        const {slug} = req.params;
        const category = await categoryModel.findOne({slug: slug})
        res.status(200).send({
            success: true,
            message: 'Category fetched successfully',
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while getting a category',
            error
        })
    }
}

export const deleteCategoryController = async (req,res) => {
    try {

        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'Category deleted successfully'
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while deleting a category',
            error
        })
    }
}