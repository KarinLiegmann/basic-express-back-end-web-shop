import mongoose from 'mongoose'

const shoppingcartSchema = {
    item: {
        type: String,
        required: [true, 'Please populate item name'],
        cast: false,
    },
    price: {
        type: Number,
        required: [true, 'Please populate the price'],
        cast: false,
    },

    amount: {
        type: Number,
        required: [true, 'Please select an amount'],
        cast: false,
    },
};

const Shoppingcart = mongoose.model('Shoppingcart', shoppingcartSchema);


export default Shoppingcart;