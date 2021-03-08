import mongoose from 'mongoose'

const customerSchema = {
    firstname: String,
    lastname: String,
    email: String
}

const Customer = mongoose.model('Customer', customerSchema)

export default Customer;