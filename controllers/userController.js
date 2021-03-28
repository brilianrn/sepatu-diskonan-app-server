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
          role: 'Customer',
          email: req.body.email,
          password: req.body.password
        }
    }
    // console.log(newUser);

    User.create(newUser)
    .then(data => {
      console.log(data);
      res.status(201).json(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static login(req, res, next){

  }
}

module.exports = UserController;