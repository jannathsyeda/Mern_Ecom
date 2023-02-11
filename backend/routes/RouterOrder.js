import expres from 'express';
import { addOrderItems,getOrderById,updateOrderToPaid,getMyOrders,getOrders,updateOrderToDelivered} from '../controllers/OrderController.js';
import {admin,protect} from '../middleware/authMiddleware.js';
const router = expres.Router();

router.route('/').post(protect, addOrderItems).get(protect,admin,getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);





export default router