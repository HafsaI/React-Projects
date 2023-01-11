//datbase name: Orders
//collection names: products
//

const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const ProductModel = require('./models/products');
const FaqModel = require('./models/faqs')

mongoose.connect("mongodb+srv://hafsairfan:Gosleep23@cluster0.ahl8s.mongodb.net/Orders?retryWrites=true&w=majority");

app.use(cors());
app.use(express.json());  //

//if browser makes get request
app.get('/getProducts', (req,res) => {

    ProductModel.find({}, (err,result) => {
        if (err){
            res.json(err)
        } 
        else {
            res.json(result)
        }
    })

})

//GET PRODUCT/:id
app.get("/products/:id", async (req, res) => {
     ProductModel.findById(req.params.id, (err,result) => {
   // ProductModel.find({}, (err,result) => {
    if (err){
        res.json(err)
    }
    else {
        res.json(result);
    }
    })
   
});

app.get('/getFaqs', (req,res) => {

    FaqModel.find({}, (err,result) => {
        if (err){
            res.json(err)
        } 
        else {
            res.json(result)
        }
    })

})

app.post("/addQuestion", async  (req, res) => {
    const ques = req.body; // prod is object while req.body is json, so line 14 converts converts that to obj
    const newQ = new FaqModel(ques);
    await newQ.save();
    res.send('sucess');

});



app.listen(3001, ()=> {
    console.log('you are connected');

});


