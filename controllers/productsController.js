const controller = {
	// Ruta /products/
	root: (req, res) => {
		res.send('Products Section in CONTROLLER');
	},
	// Ruta /products/:id
	byID: (req, res) => {
		console.log(req.params);
		res.send('Product Details: ' + req.params.id);
	},
	// Ruta /products/:id/:other
	byIDAndOther: (req, res) => {
		console.log(req.params);
		res.send('Product Details: ' + req.params.id + ' - ' + req.params.other);
	}
}

module.exports = controller;