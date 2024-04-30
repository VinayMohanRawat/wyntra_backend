const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');
const userController = require('../controllers/user');
const loginController = require('../controllers/login');


router.get('/test', (req, res) => {
    return res.status(200).send('Hello World!');
})

//Register
router.post('/addUser', userController.addUser)

//Login
router.post('/login', loginController.login)

router.get('/productslist', productController.productsList);
router.get('/productslist/:category', productController.productsCategoryList);
router.post('/addproduct', productController.addProduct);


module.exports = router;