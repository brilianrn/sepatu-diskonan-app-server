const { User } = require('../models');

class UserController{
  static register(req, res, next){
    let newUser = {
      first_name: '',
      last_name: '',
      birth_date: '',
      role: '',
      gender: '',
      email: '',
      password: ''
    }

    if (req.body.role) {
        newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password
      }
    } else {
        newUser = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          birth_date: req.body.birth_date,
          gender: req.body.gender,
          role: null,
          email: req.body.email,
          password: req.body.password
        }
    }

    User.create(newUser)
    .then(user => {
      res.status(201).json({
        message: `User with email ${user.email} successfully to created`,
        data: {
          first_name: user.first_name,
          email: user.email,
          gender: user.gender
        }
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  static login(req, res, next){

  }
}

module.exports = UserController;