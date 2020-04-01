const mongoose = require('mongoose');
const Products = mongoose.model('Products');

exports.listProducts= async () => {
  const res = await Products.find({});
  return res;
};

exports.getProduct = async (id) => {
    const res = await Products.findById(id)
    return res;
  };

exports.createProduct = async data => {
  const Product = new Products(data);
  await Product.save();
};

exports.updateProduct = async (id, data) => {
    console.log(data);
    await Products.findByIdAndUpdate(id, {
      $set: data
    });
  };

  exports.deleteProduct = async id => {
    await Products.findByIdAndDelete(id);
  };
