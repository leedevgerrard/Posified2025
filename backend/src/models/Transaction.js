import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true
    },
    transactionDate: {
      type: Date,
      default: Date.now()
    },
    items: {
      type: Array
    },
    bills: {
      total: { type: Number, required: true },
      tax: { type: Number, required: true },
      totalAfterTax: { type: Number, required: true }
    },
    payment: {
      paymentMethod: { type: String, required: true },
      paidAmount: { type: Number, required: true },
      change: { type: Number, required: true }
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {timestamps: true}
)

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;