import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'ongoing'
    },
    customerName: {
      type: String,
      required: true
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
    items: {
      type: Array
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Table'
    },
    tableNum: {
      type: Number,
      required: true
    }
  },
  {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema);

export default Order;