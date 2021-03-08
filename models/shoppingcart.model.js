import mongoose from 'mongoose'


const shoppingcartSchema = {
    userId: String,
    productname: String,
    price: Number,
    totalPrice: Number
};

const Shoppingcart = mongoose.model('Shoppingcart', shoppingcartSchema);

export default Shoppingcart;