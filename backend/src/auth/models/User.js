const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	_id: String,
	realname: String,
	nickname: String,
	profileurl: String,
	avatarfull: String,
	

})
  
module.exports = mongoose.model('steam', userSchema)
  
