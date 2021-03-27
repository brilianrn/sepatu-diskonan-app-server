const bcrypt = require('bcryptjs');

function hashPass(inputPass) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('' + inputPass, salt);

  return hash;
}

function comparePass(inputPass, passDb) {
  return bcrypt.compareSync(inputPass, passDb);
}

module.exports = { hashPass, comparePass };