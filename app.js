// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Levantando el servidor de Express
app.listen(3030, 'localhost', () => console.log('Running in 3030 port'));

// Requerir las rutas de /products
const pdtosRoutes = require('./routes/products');

// Le decimos a la app que use esas rutas
app.use('/products', pdtosRoutes);

// Ruta GET a /add/:n1/:n2
app.get('/add/:n1/:n2?', (req, res) => {
	console.log(req.params);
	let number2 = req.params.n2 == undefined ? 0 : req.params.n2;
	let result = Number(req.params.n1) + Number(number2);
	res.send('Add two numbers: ' + req.params.n1 + ' + ' + number2 + ' = ' + result);
});

// Error 404 - SIEMPRE AL FINAL
app.get('*', (req, res) => {
	res.status(404).send('¡Not FOUND! Sorry.')
});