const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute.js');
// const productRoute = require('./productRoute.js');
// const castRoute = require('./castRoute.js');
// const checkoutRoute = require('./checkouteRoute.js')

router.use('/users', userRoute);
// router.use('/products', productRoute);
// router.use('/casts', castRoute);
// router.use('/checkouts', checkoutRoute);

module.exports = router;