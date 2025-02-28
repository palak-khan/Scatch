const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/produnctsRouter')
const usersRouter = require('./routes/usersRouter')
app.set('view engine','ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname,'pubic')));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/owners',ownersRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)

app.listen(3000,()=>{
console.log('Server is running on port http://localhost:3000')
})