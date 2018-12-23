const express = require('express')
const passport = require('passport')
const steam = require('passport-steam')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const SteamStrategy = require('./src/auth/authSteam')
const cors = require('cors')
const authRoutes = require('./src/auth/routes/authRoutes')
const teamRoutes = require('./src/teams/routes/TeamRoute')
const userByIdRoutes = require ('./src/userbyid/UserByIdRoute')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/fortalgamers')
	.then(() => {
		console.log('conectado ao banco de dados')
	}).catch(err => console.log(err))

const app = express()
app.use(express.static('/public/uploads/images'))
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 10000,
	keys: ['fortalgamers'],
})) 
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(cors({origin:'http://localhost:8080', credentials: true}))
app.use('/api', authRoutes, teamRoutes, userByIdRoutes)

app.get('/csgobanner', (req, res) => {
	res.sendFile(path.join(__dirname, './public/uploads/images', 'csgo.png'))
})

const port = 3000 || process.env.PORT 

app.listen(port, '0.0.0.0', () => {
	console.log('running on 3000 port')
})