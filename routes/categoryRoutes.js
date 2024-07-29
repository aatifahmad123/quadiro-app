import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { deleteCategoryController, newCategoryController, updateCategoryController, categoryController, singleCategoryController } from '../controllers/categoryController.js'

const router = express.Router()

// routes
// create
router.post('/new-category',requireSignIn, isAdmin, newCategoryController)

// update
router.put('/update-category/:id',requireSignIn, isAdmin, updateCategoryController)

// read
router.get('/get-category', categoryController)

router.get('/single-category/:slug', singleCategoryController)

router.delete('/delete-category/:id', deleteCategoryController)

export default router