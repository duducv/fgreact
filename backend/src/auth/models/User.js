const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	_id: String,
	realname: String,
	nickname: String,
	profileurl: String,
	avatarfull: String,
	team: String
})
  
module.exports = mongoose.model('users', userSchema)
  
