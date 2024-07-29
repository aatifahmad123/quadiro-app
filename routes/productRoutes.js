import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { updateProductController, newProductController, getProductController, getSingleProductController, getProductPhotoController, deleteProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()


// routes
router.post('/new-product',requireSignIn, isAdmin,formidable(), newProductController)

// routes
router.put('/update-product/:id',requireSignIn, isAdmin,formidable(), updateProductController)

router.get('/get-product', getProductController)

router.get('/get-product/:slug', getSingleProductController)

router.get('/get-photo/:id', getProductPhotoController)

router.delete('/delete-product/:id', deleteProductController)

export default router