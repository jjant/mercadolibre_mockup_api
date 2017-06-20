var express = require('express');
var router = express.Router();
var queryItems = require('../api/items').queryItems;
var queryItem = require('../api/items').queryItem;

router.get('/items', (req, res) => {
	(async () => {
		const queryText = req.query.q;
		const response = await queryItems(queryText);
		res.send(response);
	})();
});

router.get('/item/:id', (req, res) => {
	(async () => {
		const itemId = req.params.id;
		const item = await queryItem(itemId);
		res.send(item);
	})();
});

module.exports = router;
