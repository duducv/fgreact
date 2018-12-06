const express = require('express')
const passport = require('passport')
const steam = require('passport-steam')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const SteamStrategy = require('./src/auth/authSteam')
const User = require('./src/auth/models/User')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/Steam')
	.then(() => {
		console.log('conectado ao banco de dados')
	}).catch(err => console.log(err))

const app = express()
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 10000,
	keys: ['fortalgamers'],
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(cors({origin:'http://localhost:8080', credentials: true}))

app.get('/', (req, res) => {

	User.findById(req.user).then(result => res.send(result))
  
})

app.get('/auth/steam/return',
	passport.authenticate('steam', { failureRedirect: '/login' }),
	(req, res) => {
		// Successful authentication, redirect home.
		res.redirect('http://localhost:8080')
	})


app.get('/auth/steam', passport.authenticate('steam'))
app.get('/logout', (req, res) => {
	req.logout()
	res.redirect('http://localhost:8080')
})

const port = 3000 || process.env.PORT 

app.listen(port, () => {
	console.log('running on 3000 port')
})