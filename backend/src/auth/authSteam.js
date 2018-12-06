const passport = require('passport')
const SteamStrategy = require('passport-steam')
const User = require('./models/User')

passport.serializeUser((user, done) => {
	done(null, user.id)
})
  
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user.id)
	})
}) 
  
module.exports = passport.use(new SteamStrategy({
	returnURL: 'http://localhost:3000/auth/steam/return',
	realm: 'http://localhost:3000',
	apiKey: 'BF5FD55E42A9CEF246E9FCB3FBD7FFB7'
},
function(identifier, profile, done) {
	console.log(profile._json)
	User.findOne({_id: profile._json.steamid}).then((currentUser) => {
		if(currentUser){
			console.log(`the user already logged in: ${currentUser}`)
			done(null, currentUser)
		} else {
			User({
				_id: profile._json.steamid,
				realname: profile._json.realname,
				nickname: profile._json.personaname,
				profileurl: profile._json.profile,
				avatarfull: profile._json.avatarfull,
			}).save().then((newUser) => {
				done(null, newUser)
			})
          
		}
	})
}
))