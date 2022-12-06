import express from 'express'
const router =express.Router()
import {authUsers} from '../controllers/UserController.js'

//@desc Fetch all products
//@route GET/api/products
//@access public

// router.route('/').get(getAllUsers)
router.route('/login').post(authUsers)

export default router