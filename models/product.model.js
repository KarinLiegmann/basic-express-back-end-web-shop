import mongoose from 'mongoose'

const productSchema = { name: String, category: String, price: Number }
const Product = mongoose.model('Product', productSchema)

export default Product;