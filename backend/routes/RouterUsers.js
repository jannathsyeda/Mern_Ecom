import express from 'express'
const router =express.Router()
import {authUsers,getUserProfile,registerUser,updateUserProfile} from '../controllers/UserController.js'
import protect from '../middleware/authMiddleware.js'
//@desc Fetch all products
//@route GET/api/products
//@access public

router.route('/').post(registerUser)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/login').post(authUsers)

export default router