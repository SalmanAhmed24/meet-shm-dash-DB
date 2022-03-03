const mongoose = require('mongoose');
const leadSourceSchema = mongoose.Schema({
	leadSource: { type: String, required: true }
});
const leadSourceModel = mongoose.model('leadSource', leadSourceSchema);
module.exports = leadSourceModel;
