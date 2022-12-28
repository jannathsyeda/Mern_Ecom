import expres from 'express';
import { addOrderItems,getOrderById } from '../controllers/OrderController.js';
import  protect  from '../middleware/authMiddleware.js';
const router = expres.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

export default router