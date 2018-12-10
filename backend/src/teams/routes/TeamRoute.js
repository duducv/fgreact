const express = require('express')
const Team = require('../models/Team')
const User = require('../../auth/models/User')
const Joi = require('joi')
const router = express.Router()

router.post('/team/new', async (req, res) => {
	if(!req.user) return res.status(401).send('Não autorizado')
	const ifAlreadyHaveTeam = await User.findById(req.user)
	if(ifAlreadyHaveTeam.team) return res.status(400).send('each player could have only one team')
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
		Team({
			name: req.body.name,
			owner: req.user,
			avatar: 'none',
			captain: req.user,
			password: req.body.password
		}).save()
			.then((newTeam) => {
				User.findByIdAndUpdate(newTeam.owner, {team: newTeam._id}).then( user => res.send(user) )
			})
			.catch( err => res.status(400).send(err))
		
	} 
})

router.get('/team/validation/:name', async (req, res) => {
	if(!req.user) return res.status(401).send('unauthorized')
	let result = await Team.findOne({name: req.params.name})
	if(result) return res.status(400).send('already in database')
	return res.send('not in database')
})

router.get('/team/:id', (req, res) => {
	Team.findById(req.params.id).then(result => res.send(result))
})

module.exports = router