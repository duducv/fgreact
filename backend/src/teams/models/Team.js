const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	avatar: { 
		type: String,
		required: true
	},
	captain: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 50
	},
	players: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	}],
	coach: String
})
  
module.exports = mongoose.model('teams', userSchema)
  