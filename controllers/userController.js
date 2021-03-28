const { generateToken } = require('../helpers/jwt');
const { comparePass } = require('../helpers/passHelp.js');
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
      next(err)
    })
  }

  static login(req, res, next){
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ where: { email } })
    .then(data => {
      if (data) {
        let cekPass = comparePass(password, data.password);
        let payload = { id: data.id, email: data.email }

        if (cekPass) {
          let access_token = generateToken(payload);
          
          res.status(200).json({
            first_name: data.first_name,
            email: data.email,
            access_token
          })
        } else {
          throw new Error({
            name: 'wrongPass',
            code: 400
          })
        }
      } else {
        throw new Error({
            name: 'wrongPass',
            code: 400
          })
      }
    })
    .catch(err => {
      next({
        name: 'wrongPass',
        code: 400
      })
    })
  }
}

module.exports = UserController;