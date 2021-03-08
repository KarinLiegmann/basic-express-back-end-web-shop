import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import productRoutes from './routes/products.routes.js'
import customerRoutes from './routes/customers.routes.js'
import shoppingCartRoutes from './routes/shoppingCart.routes.js'

import bodyParser from 'body-parser'


import Customer from './models/Customer.model.js'
import Product from './models/Product.model.js'
import Shoppingcart from './models/ShoppingCart.model.js'

const connectionString = 'mongodb+srv://h0rse:Shopper123@cluster0.bq5ow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


const server = express();
server.use(cors());
server.use(bodyParser.json())

server.get('/', (request, response) => {
    response.json({ status: 'The shop-server is up and running' })
})

server.use('/api', [productRoutes, customerRoutes, shoppingCartRoutes]);






/*

server.post('/shoppingcart', (request, response) => {
    const shoppingcart = new Shoppingcart({
        userId: request.body.userId,
        productname: request.body.productname,
        price: request.body.price
    })

    if (shoppingcart.userId && shoppingcart.productname && shoppingcart.price) {
        shoppingcart.save()
            .then(shoppingcart => response.json(shoppingcart))
    } else {
        response.json({ error: 'ERROR' })
    }
})

server.get('/shoppingcart/:customerId', (request, response) => {
    const customerId = request.params.customerId;

    Shoppingcart.findById(customerId)
        .then(shoppingcart => response.json(shoppingcart))
        .catch(error => response.json(error))
}) */





server.listen(4000)