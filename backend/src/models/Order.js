import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerDetails: {
      name: { type: String, required: true },
      guests: { type: Number, required: True },
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    bills: {
      total: { type: Number, required: true },
      tax: { type: Number, required: true },
      totalAfterTax: { type: Number, required: true }
    },
    items: []
  },
  {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema);

export default Order;