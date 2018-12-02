const mongoose = require('mongoose')
const config = require('config')
const jwt = require('jsonwebtoken')
const Joi = require('joi') // Validations package


const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	email: {
		type: String,
		minlength: 5,
		maxlength: 255,
		required: true,
		unique: true
	},
	password: {
		// propTypes
		type: String, 
		minlength: 5, 
		maxlength: 1024,
		required: true,
	},
	isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function() {
	const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'))
	return token
}

const User = mongoose.model('users', userSchema)

const JoiValidation = async (reqbody) => {
	let schema = {
		name: Joi.string().alphanum().min(2).max(50).required(),
		email: Joi.string().email({ minDomainAtoms: 2 }).required(),
		password: Joi.string().min(6).required(),
		confirmpassword: Joi.string().min(6).required()
	}
	return await Joi.validate(reqbody, schema)
}

exports.User = User
exports.validate = JoiValidation