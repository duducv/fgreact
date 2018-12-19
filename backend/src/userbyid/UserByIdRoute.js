const express = require('express')
const User = require('../auth/models/User')
const router = express.Router()

router.get('/userbyid/:id', async (req,res) => {
	try {
		let user = await User.findById(req.params.id).populate('team')
		if (user) res.send(user)
	} catch (err) {
		res.status(400).send('User not found in database')
	}
}) 

module.exports = router