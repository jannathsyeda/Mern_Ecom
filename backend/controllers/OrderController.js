import asyncHandler from "express-async-handler";
import Order from "../Models/OrderModel.js";

// @des create new order
// @route POST /api/orders
// @access private

const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice  } = req.body;
        
if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No order items')
    return
}else{
    const create = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    })
    const createdOrder = await create.save();
    res.status(201).json(createdOrder);
}
   
  
    
   
  });

  const getOrderById = asyncHandler(async(req,res)=>{
    
    const id=req.params.id
    const order =await Order.findById(id).populate('user','name email')
    
     console.log(order)
      if(order){
        res.send(order)
      }
      else{
        res.status(404)
        throw new Error('Order not found')
      }
  })

  // @des update order to paid
  // @route PUT /api/orders/:id/pay
  // @access private
  const updateOrderToPaid = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
      order.isPaid=true
      order.paidAt=Date.now()
      order.paymentResult={
        id:req.body.id,
        status:req.body.status,
        update_time:req.body.update_time,
        email_address:req.body.payer.email_address
      }
      const updatedOrder = await order.save()
      res.json(updatedOrder)
    }
    else{
      res.status(404)
      throw new Error('Order not found')
    }
  })


export { addOrderItems,getOrderById,updateOrderToPaid};
