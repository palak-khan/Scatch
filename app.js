const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname,'pubic')));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3000,()=>{
console.log('Server is running on port http://localhost:3000/')
})