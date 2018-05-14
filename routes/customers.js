const express = require('express');
const router = express.Router();
const passport = require('passport');
const Customer = require('../models/customer');

// List customers
router.get('/list', (req, res, next) => {
	Customer.listCustomers({}, (err, customers) => {
		if (err) {
			res.json({ message: 'Failed to list Customer' });
		} else {
			res.json(customers);
		}
	});
});

// Add customer
router.post('/add', (req, res, next) => {
	let newCustomer = new Customer(req.body);
	Customer.addCustomer(newCustomer, (err, customer) => {
		if (err) {
			res.json({ success: false, msg: 'Failed to add Customer' });
		} else {
			res.json({ success: true, msg: 'Customer added' });
		}
	});
});

// Update customer
router.post('/update', (req, res, next) => {
	let newCustomer = new Customer(req.body);
	Customer.updateCustomer(newCustomer, (err, customer) => {
		if (err) {
			res.json({ success: false, msg: 'Failed to update Customer' });
		} else {
			res.json({ success: true, msg: 'Customer updated' });
		}
	});
});

// Delete customer
router.delete('/delete/:id', (req, res, next) => {
	Customer.deleteCustomer(req.params.id, (err, customer) => {
		if (err) {
			res.json({ success: false, msg: 'Failed to delete Customer' });
		} else {
			res.json({ success: true, msg: 'Customer deleted' });
		}
	});
});

module.exports = router;
