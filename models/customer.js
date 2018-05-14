const mongoose = require('mongoose');

// Customer Schema
const CustomerSchema = mongoose.Schema({
	customerID: Number,
	name: {
		first: String,
		last: String
	},
	birthday: Date,
	gender: String,
	lastContact: Date,
	customerLifetimeValue: Number
});

const Customer = (module.exports = mongoose.model('Customer', CustomerSchema));

module.exports.getCustomer = function(customerID, callback) {
	Customer.findOne({ customerID: customerID }, callback);
};

module.exports.listCustomers = function({}, callback) {
	Customer.find({}, callback);
};

module.exports.addCustomer = function(newCustomer, callback) {
	Customer.findOne({}, {}, { sort: { created_at: -1 } }, function(err, lastCustomer) {
		const newID = lastCustomer.customerID + 1;
		newCustomer.save(callback);
	});
};

module.exports.deleteCustomer = function(customerID, callback) {
	Customer.find({ customerID: customerID }).remove().exec(callback);
};

module.exports.updateCustomer = function(newCustomer, callback) {
	Customer.update(
		{ customerID: newCustomer.customerID },
		{
			$set: {
				gender: newCustomer.gender,
				name: {
					first: newCustomer.name.first,
					last: newCustomer.name.last
				},
				birthday: newCustomer.birthday,
				lastContact: newCustomer.birthday
			}
		},
		{ multi: true }
	).exec(callback);
};
