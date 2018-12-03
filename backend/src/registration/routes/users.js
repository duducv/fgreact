const auth = require('../../middleware/auth')
const admin = require('../../middleware/admin')
const express = require('express')
const _ = require('lodash') // Object helper package
const bcrypt = require('bcrypt')
const { User, validate } = require('../models/User')

const router = express.Router()

router.get('/me', auth, async (req, res) => {
	let me = await User.findById(req.user._id).select('-password')
	res.send(me)
})

router.get('/users', [auth, admin], async (req, res) => {

	let user = await User.find().select('-password')
	res.send(user)

})

router.post('/register', async (req, res) => {

	try {      
		await validate(req.body)  
		let user = await User.findOne({email: req.body.email}) 
		if (user) return res.status(400).send('User already registered') 
		user = new User(_.pick(req.body, ['name', 'email', 'password'])) 
		if(user.password !== req.body.confirmpassword) return res.status(400).send('the password confirmation do not match')
		const salt = await bcrypt.genSalt(10)
		user.password = await bcrypt.hash(user.password, salt)
		await user.save()
		const token = user.generateAuthToken()
		res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']))
	} catch(err) {
		return res.status(400).send(err)
	}

})

router.post('/login', async (req, res) => {

	try {
		let user = await User.findOne({ email: req.body.email })
		if (!user) return res.status(401).send('Invalid email or password')
		const validPassword =  await bcrypt.compare(req.body.password, user.password)
		if(!validPassword) return res.status(401).send('Invalid email or password')
		const token = user.generateAuthToken()
		res.status(200).send([token, user._id])
	} catch(err) {
		return res.status(400).send(err)
	}

})

module.exports = router