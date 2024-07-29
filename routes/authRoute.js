import express from 'express'
import {registerController,loginController, testController, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

// routing
// REGISTER
router.post('/register',registerController)

// LOGIN
router.post('/login',loginController)

// FORGOT PASSWORD
router.post('/forgot-password',forgotPasswordController)

// test
router.get('/test',requireSignIn,isAdmin, testController)

//protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true , message : 'kaam kr rha'});
});

//protected admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true , message : 'kaam kr rha'});
});



export default router;