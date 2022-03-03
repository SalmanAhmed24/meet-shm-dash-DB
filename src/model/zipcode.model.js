const mongoose = require('mongoose');
const zipcodeSchema = mongoose.Schema({
	zipcode: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true }
});
const zipcodeModel = mongoose.model('zipcode', zipcodeSchema);
module.exports = zipcodeModel;
