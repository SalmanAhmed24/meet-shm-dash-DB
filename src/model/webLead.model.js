const mongoose = require('mongoose');
const webLeadSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: {
		type: Number
	},
	services: [ { name: { type: String } } ],
	message: { type: String }
});
const webLeadModel = mongoose.model('webLeads', webLeadSchema);
module.exports = webLeadModel;
