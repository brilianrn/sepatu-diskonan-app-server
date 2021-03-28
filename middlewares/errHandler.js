function errHandler(err, req, res, next) {
    if (err.name === 'wrongPass') {
        res.status(err.code).json({ message: 'Invalid email/ password' });
    } else if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.message })
    } else if (err.name === 'wrongAuth') {
        res.status(err.code).json({ message: 'You are unauthorized!' })
    } else if (err.name === 'notLogin') {
        res.status(err.code).json({ message: 'You must login first!'})
    }
    else {
        res.status(500).json(err);
    }
}

module.exports = errHandler;