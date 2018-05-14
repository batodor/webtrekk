const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Customer profile
router.get('/profile/:id', (req, res, next) => {
	Customer.getCustomer(req.params.id, (err, customer) => {
		if (err) {
			res.json({ success: false, msg: 'Failed to load Customer' });
		} else {
			res.json(customer);
		}
	});
});

module.exports = router;
