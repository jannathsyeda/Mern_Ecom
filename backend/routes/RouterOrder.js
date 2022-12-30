import expres from 'express';
import { addOrderItems,getOrderById,updateOrderToPaid } from '../controllers/OrderController.js';
import  protect  from '../middleware/authMiddleware.js';
const router = expres.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router