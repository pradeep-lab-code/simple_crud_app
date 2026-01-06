const Product = require("../models/product.model.js");

// Controller to handle product-related operations
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single product by ID
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: error.message });
  }   
};

// Controller to update an existing product
const updateProduct = async(req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id ${id} not found` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
    console.log("----------------------------");
    console.log("Product updated successfully");
    console.log("----------------------------");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a product
const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with id ${id} not found` });
      }
      res.status(200).json(product);
      console.log("----------------------------");
      console.log("Product deleted successfully");
      console.log("----------------------------");
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: error.message });
    }
};

// Exporting the controller functions
module.exports = {
  getProducts,
  getProduct, 
  createProduct,
  updateProduct,
  deleteProduct
};
