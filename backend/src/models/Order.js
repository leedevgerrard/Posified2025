import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerDetails: {
      name: { type: String, required: true },
      guests: { type: Number, required: true },
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
    items: [],
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Table'
    }
  },
  {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema);

export default Order;