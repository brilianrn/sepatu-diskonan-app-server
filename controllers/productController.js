const { Product } = require('../models');

class ProductController{
  static addProduct(req, res, next){
    let newProduct = {
      name: req.body.name,
      size: req.body.size,
      color: req.body.color,
      image_url: req.body.image_url
    };

    Product.create(newProduct)
    .then(data => {
      res.status(201).json({ message: `Product with name ${data.name} successfully to created`});
    })
    .catch(err => {
      next(err)
    })
  }

  static listProduct(req, res, next){
    Product.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      next(err);
    })
  }

  static getOneProduct(req, res, next){
    Product.findByPk(+req.params.productId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      next(err);
    })
  }

  static editProduct(req, res, next){
    
  }

  static deleteProduct(req, res, next){
    
  }
}

module.exports = ProductController;