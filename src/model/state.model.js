const mongoose = require('mongoose');
const stateSchema = mongoose.Schema({
	state: { type: String, required: true },
	stateCode: { type: String, required: true }
});
const stateModel = mongoose.model('state', stateSchema);
module.exports = stateModel;
