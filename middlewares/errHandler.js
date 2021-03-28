function errHandler(err, req, res, next) {
    if (err.name === 'wrongPass') {
        res.status(400).json({ message: 'Invalid email/ password' });
    } else if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.message })
    } else if (err.name === 'wrongAuth') {
        res.status(401).json({ message: 'You are unauthorized!' })
    } else if (err.name === 'notLogin') {
        res.status(401).json({ message: 'You must login first!'})
    } else if (err.name === 'notFound') {
        res.status(404).json({ message: 'Data is not found!'})
    }
    else {
        res.status(500).json(err);
    }
}

module.exports = errHandler;