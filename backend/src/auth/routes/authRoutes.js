const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')

router.get('/auth/steam/return',
	passport.authenticate('steam', { failureRedirect: '/login' }),
	(req, res) => {
		// Successful authentication, redirect home.
		res.redirect('http://localhost:8080')
	})
    
router.get('/auth/steam', passport.authenticate('steam'))

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('http://localhost:8080')
})

router.get('/me', (req, res) => {
	User.findById(req.user).then(result => res.send(result))
})

module.exports = router