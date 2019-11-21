// require de Express
const express = require('express');

// creamos nuestro Router
const router = express.Router();

// require de productsController
const pdtosController = require('../controllers/productsController');

// Ruta GET a /products
router.get('/', pdtosController.root);

// Ruta GET a /products/:id
router.get('/:id', pdtosController.byID);

// Ruta GET a /products/:id/:other
router.get('/:id/:other', pdtosController.byIDAndOther);

module.exports = router;