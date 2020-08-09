require('dotenv').config();

const express = require('express');
const app = express()
const userRoutes = require('./routers/users.route');
var bodyParser = require('body-parser');
const authRoute = require('./routers/auth.route');
const apiUser = require('./api/routes/user.route');
const apiProduct = require('./api/routes/product.route');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));


const port  = 3000

app.set('view engine', 'pug')
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index',{
        name: 'Aaa'
    })
})
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 
app.use('/users', userRoutes);
app.use('/auth', authRoute);
app.use('/api/users', apiUser);
app.use('/api/products', apiProduct);


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})