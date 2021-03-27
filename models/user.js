'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/passHelp');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name is required!'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING
    },
    birth_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Birth date is required!'
        },
        isDate: {
          args: true,
          msg: 'Invalid birth date!'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Gender is required!'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Role is required!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email is already exists!'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required!'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required!'
        },
        len: {
          args: [ 5 ],
          msg: 'Your password too short!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, opt){
        if (!user.role) {
          user.role = 'Customer'
        } else {
          user.role = 'Admin'
        }

        user.password = hashPass(user.password);
      }
    }
  });
  return User;
};