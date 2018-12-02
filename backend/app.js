const express = require('express') //Framework package
const mongoose = require('mongoose') //MongoDB data modelator package
const config = require('config')
const cors = require('cors')

const users = require('./src/registration/routes/users')

if (!config.get('jwtPrivateKey')) {
	console.log('FATAL ERROR: jwt private key is not defined')
	process.exit(1)
}
const app = express() 

app.use(express.json())
app.use(cors())
app.use('/api', users)

const runMongoose = async () => {

	try {
		mongoose.connect('mongodb://localhost:27017/FortalGamers')
		let connectedMessage = await 'connectado com sucesso'
		console.log(connectedMessage)
	} catch(err) {
		console.log(`could not possible connect to mongodb ${err}`)
	}

}
runMongoose()

const port =  3000 || process.env.PORT 
app.listen(port, () => {
	console.log(`Running on port ${port}`)
})