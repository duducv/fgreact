const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: String,
	avatar: String,
	captain: String,
	player1: String,
	player2: String,
	player3: String,
	player4: String,
	player5: String,
	player6: String,
	coach: String
})
  
module.exports = mongoose.model('teams', userSchema)
  