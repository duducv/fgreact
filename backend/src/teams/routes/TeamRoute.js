const express = require('express')
const Team = require('../models/Team')
const router = express.Router()

router.post('/teams', async (req, res) => {
	const ifExist = await Team.findOne({name: req.body.name})
	if(ifExist) res.status(400).send('Time ja cadastrado')
	if(req.user) {
		let avatar = 'none'
		if (req.body.avatar) avatar = req.body.avatar
		Team({
			name: req.body.name,
			owner: req.user,
			avatar: avatar,
			captain: req.user
		}).save().then(newTeam => res.send(newTeam))
		
	} else {
		res.status(401).send('Não autorizado')
	}
})


module.exports = router