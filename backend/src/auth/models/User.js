const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	steamid: String,
	realname: String,
	nickname: String,
	profileurl: String,
	avatarfull: String,
	team: {
		type:mongoose.Schema.Types.ObjectId,
		ref: 'teams'
	}
})
  
module.exports = mongoose.model('users', userSchema)
  
