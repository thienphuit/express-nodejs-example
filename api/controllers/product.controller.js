const Product = require("../../models/product.model");

module.exports.getProduct = async (req, res) => {
  let products = await Product.find();
  res.json(products);
};

module.exports.postProduct = async (req, res) => {
  let product = await Product.create(req.body);
  res.json(product);
};

module.exports.putProduct = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then(async () => {
    const resProduct = await Product.findOne({ _id: req.params.id });
    res.json(resProduct);
  });
};
