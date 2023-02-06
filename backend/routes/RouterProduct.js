import express from 'express'
const router =express.Router()
import {getAllProducts,productById,deleteProduct,createProduct,updateProduct} from '../controllers/ProductConroller.js'
import {protect,admin }  from '../middleware/authMiddleware.js'

//@desc Fetch all products
//@route GET/api/products
//@access public

router.route('/').get(getAllProducts).post(protect,admin,createProduct)
router.route('/:id').get(productById)
router.route('/:id').delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)

export default router