const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');

//middleware part
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node Api Server')
});

//post api to create product
app.post('/api/products', async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }catch(error){
    console.error('Error creating product:', error);
    res.status(500).json({ message: error.message });
  }

});

//get api to fetch all products
app.get('/api/products', async(req, res) => {
  try{
    const products = await Product.find({});   
    res.status(200).json(products);
  }catch(error){
    console.error('Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
});

//get api to fetch single product by id
app.get('/api/product/:id', async(req, res) => {
  try{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  }catch(error){
    console.error('Error fetching product:', error);
    res.status(500).json({ message: error.message });
  }
});

//connect to mongodb and start the server
mongoose.connect(
  'mongodb+srv://hlopradeep7_db_user:ST1Y3rass5HoSjqD@backenddb.nfdmube.mongodb.net/?appName=BackendDB'
)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


