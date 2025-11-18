import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    price: {
      type: Number,
      required: true
    },
    imageURL: {
      type: String
    },
    status: {
      type: String,
      default: 'Available'
    }
  },
  {timestamps: true}
)

const Product = mongoose.model('Product', productSchema);

export default Product;