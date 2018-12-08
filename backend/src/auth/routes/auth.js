const express = require('express')
const router = express.Router()
const passport = require('passport')

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

module.exports = router