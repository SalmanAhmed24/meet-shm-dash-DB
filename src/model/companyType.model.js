const mongoose = require('mongoose');
const companyTypeSchema = mongoose.Schema({
	companyType: { type: String, required: true }
});
const companyTypeModel = mongoose.model('companyType', companyTypeSchema);
module.exports = companyTypeModel;
