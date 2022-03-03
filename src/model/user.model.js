const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	phone: { type: Number },
	role: { type: String }
});
const userModel = mongoose.model('allusers', userSchema);
module.exports = userModel;
