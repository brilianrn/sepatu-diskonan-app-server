const { verifyToken } = require('../helpers/jwt');
const { User, Product } = require('../models');

function authentication(req, res, next) {
  try {
    let { id, email } = verifyToken(req.headers.access_token);

    User.findOne({ where: { id, email }})
    .then(data => {
      if (data) {
        req.currentUser = { id: data.id, email: data.email, role: data.role };
        next();
      } else {
        throw new Error({
          name: 'wrongAuth',
          code: 401
        })
      }
    })
    .catch(err => {
      next({
        name: 'wrongAuth',
        code: 401
      })
    })
  } catch (error) {
    next({
      name: 'notLogin',
      code: 401
    })
  }
}

function authorization(req, res, next) {
  User.findByPk(+req.currentUser.id)
  .then(data => {
    if (data && data.role === 'Admin') {
      next();
    } else {
      throw new Error({
        name: 'wrongAuth',
        code: 401
      })
    }
  })
  .catch(err => {
    next({
      name: 'wrongAuth',
      code: 401
    })
  })
}

module.exports = { authentication, authorization };