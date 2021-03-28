function errHandler(err, req, res, next) {
    if (err.name === 'wrongPass') {
        res.status(err.code).json({ message: 'Invalid email/ password' });
    } else {
        res.status(500).json(err);
    }
}

module.exports = errHandler;