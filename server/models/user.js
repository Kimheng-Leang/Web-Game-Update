const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	email :{
		type : String,
		unique : true
	},
	password : String,
	feeds:[{
		name : String,
		url : String,
	}]
});

const User = mongoose.model('user', userSchema);
module.exports = {
	Schema : userSchema,
	User
};