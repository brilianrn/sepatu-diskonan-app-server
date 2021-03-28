function errHandler(err, req, res, next) {
    console.log(err.name);
    if (err.name === 'wrongPass') {
        res.status(err.code).json({ message: 'Invalid email/ password' });
    } else if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.message })
    }
    else {
        res.status(500).json(err);
    }
}

module.exports = errHandler;