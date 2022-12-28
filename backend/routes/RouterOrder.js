import expres from 'express';
import { addOrderItems } from '../controllers/OrderController.js';
import  protect  from '../middleware/authMiddleware.js';
const router = expres.Router();

router.route('/').post(protect, addOrderItems);

export default router