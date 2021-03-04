import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import Customer from './models/customer.model.js'
import Product from './models/product.model.js'

const connectionString = 'mongodb+srv://h0rse:Shopper123@cluster0.bq5ow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


const server = express();

server.use(bodyParser.json())

server.get('/', (request, response) => {
    response.json({ status: 'the shop-server is up and running' })
})

server.get('/products', (request, response) => {
    Product.find()
        .then(products => response.json(products))
        .catch((error) => response.json(error))
})
server.post('/products', (request, response) => {
    const product = new Product({
        name: request.body.name,
        category: request.body.category,
        price: request.body.price
    })

    if (product.name && product.category && product.price) {
        product.save()
            .then(product => response.json(product))
    } else {
        response.json({ error: 'ERROR' })
    }
})

server.get('/customers', (request, response) => {
    Customer.find()
        .then(customers => response.json(customers))
        .catch((error) => response.json(error))
})

server.get('/customers/:customerId', (request, response) => {
    const customerId = request.params.customerId;

    Customer.findById(customerId).then(customer => response.json(customer))
})



server.post('/customers', (request, response) => {
    const customer = new Customer({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
    })

    if (customer.firstname && customer.lastname && customer.email) {
        customer.save()
            .then(customer => response.json(customer))

    } else {
        response.json({ error: 'ERROR' })
    }
})

server.listen(4000)