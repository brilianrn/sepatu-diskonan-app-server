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
      if (data == null) {
        next({
          name: 'notFound',
          code: 403
        })
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => {
      next(err);
    })
  }

  static editProduct(req, res, next){
    let editProduct = {
      name: req.body.name,
      size: req.body.size,
      color: req.body.color,
      image_url: req.body.image_url
    };

    Product.update(editProduct, { where: { id: +req.params.productId }})
    .then(data => {
      if (data == 0) {
        next({
          name: 'notFound',
          code: 403
        })
      } else {
        res.status(200).json({ message: `Data with id: ${req.params.productId} successfully to updated`});
      }
    })
    .catch(err => {
      next(err)
    })
  }

  static deleteProduct(req, res, next){
    Product.destroy({ where: { id: +req.params.productId }})
    .then(data => {
      if (data == 0) {
        next({
          name: 'notFound',
          code: 403
        })
      } else {
        res.status(200).json({ message: `Data with id: ${req.params.productId} successfully to deleted`});
      }
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = ProductController;