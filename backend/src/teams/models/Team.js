const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	avatar: { 
		type: String,
		required: true
	},
	captain: {
		type: String,
		required: true
	},
	player1: String,
	player2: String,
	player3: String,
	player4: String,
	player5: String,
	player6: String,
	coach: String
})
  
module.exports = mongoose.model('teams', userSchema)
  