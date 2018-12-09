const express = require('express')
const Team = require('../models/Team')
const Joi = require('joi')
const router = express.Router()

router.post('/team/new', async (req, res) => {
	const ifExist = await Team.findOne({name: req.body.name})
	if(ifExist) return res.status(400).send('team name already in use')
	const schemaValidator = {
		name: Joi.string().min(2).max(50).required(),
		password:Joi.string().min(6).max(50).required(),
		confirmpassword: Joi.string().min(6).max(50).required()
	}
	if (req.body.password !== req.body.confirmpassword) return  res.status(400).send('password do not match')
	const result = Joi.validate(req.body, schemaValidator)
	if(result.error) res.status(400).send(result.error.details[0].message)
	if(req.user) {
		let avatar = 'none'
		if (req.body.avatar) avatar = req.body.avatar
		Team({
			name: req.body.name,
			owner: req.user,
			avatar: avatar,
			captain: req.user,
			password: req.body.password
		}).save().then(newTeam => res.send(newTeam)).catch( err => res.status(400).send(err))
		
	} else {
		res.status(401).send('Não autorizado')
	}
})

router.get('/team/:id', async (req, res) => {
	if(!req.user) return res.status(401).send('unauthorized')
	let result = await Team.findOne({name: req.params.id})
	if(result) return res.status(400).send('already in database')
	return res.send('not in database')
})


module.exports = router