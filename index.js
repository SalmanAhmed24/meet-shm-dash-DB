const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const webLeadModel = require('./src/model/webLead.model');
const userModel = require('./src/model/user.model');
const zipcodeModel = require('./src/model/zipcode.model');
const stateModel = require('./src/model/state.model');
const companyTypeModel = require('./src/model/companyType.model');
const leadSourceModel = require('./src/model/leadSource.model');

const mongodbCon = process.env.MONGODB_URI || 'mongodb://localhost:27017/meetSHM-DB';
mongoose.connect(mongodbCon);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// All API's
// Web Leads
app.post('/api/addWebLead', (req, res) => {
	webLeadModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.statusCode(400);
			res.send('there is some error');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/webLead', (req, res) => {
	webLeadModel.find({}, (error, result) => {
		if (error) {
			res.statusCode(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
// Staff User
app.post('/api/user', (req, res) => {
	userModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.status(400);
			res.send('there is some error');
		} else {
			res.send(result);
		}
	});
});
app.put('/api/editUser', (req, res) => {
	const id = req.query.id;
	const data = req.body;
	userModel.findByIdAndUpdate({ _id: id }, data, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/user', (req, res) => {
	userModel.find({}, (error, result) => {
		if (error) {
			res.statusCode(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.post('/api/login', (req, res) => {
	userModel.findOne({ email: req.body.email }, (error, result) => {
		if (error) {
			res.status(400);
			res.send('Wrong Credentials');
		} else {
			res.send(result);
		}
	});
});

// Zipcode
app.post('/api/addZipcode', (req, res) => {
	zipcodeModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/allZipcode', (req, res) => {
	zipcodeModel.find({}, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.put('/api/editZipcode', (req, res) => {
	const data = req.body;
	const id = req.query.id;
	zipcodeModel.findByIdAndUpdate({ _id: id }, data, (error, result) => {
		if (error) {
			res.status(400);
			res.send(error);
		} else {
			res.send(result);
		}
	});
});

// state
app.post('/api/addState', (req, res) => {
	stateModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/allStates', (req, res) => {
	stateModel.find({}, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.put('/api/editState', (req, res) => {
	const data = req.body;
	const id = req.query.id;
	stateModel.findByIdAndUpdate({ _id: id }, data, (error, result) => {
		if (error) {
			res.status(400);
			res.send('Something went wrong');
		} else {
			res.send(result);
		}
	});
});

// companyType
app.post('/api/addCompanyType', (req, res) => {
	companyTypeModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.put('/api/editCompanyType', (req, res) => {
	const data = req.body;
	const id = req.query.id;
	companyTypeModel.findByIdAndUpdate({ _id: id }, data, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/allCompanyType', (req, res) => {
	companyTypeModel.find({}, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
// LeadSource
app.post('/api/addLeadSource', (req, res) => {
	leadSourceModel.insertMany(req.body, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.put('/api/editLeadSource', (req, res) => {
	const data = req.body;
	const id = req.query.id;
	leadSourceModel.findByIdAndUpdate({ _id: id }, data, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});
app.get('/api/allLeadSource', (req, res) => {
	leadSourceModel.find({}, (error, result) => {
		if (error) {
			res.status(400);
			res.send('something went wrong');
		} else {
			res.send(result);
		}
	});
});

app.listen(process.env.PORT || 3002, () => {
	console.log(`listening to ${process.env.PORT || 3002}`);
});
