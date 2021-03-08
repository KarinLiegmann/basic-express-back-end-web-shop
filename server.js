import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import productRoutes from './routes/products.routes.js'
import customerRoutes from './routes/customers.routes.js'
import shoppingCartRoutes from './routes/shoppingCart.routes.js'

import bodyParser from 'body-parser'


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


server.listen(4000)