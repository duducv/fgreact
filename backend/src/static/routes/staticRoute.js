const router = require('express').Router()
const path = require('path')

router.get('/csgobanner', (req, res) => {
	res.sendFile(path.join(__dirname, '../../../public/uploads/images', 'csgo.png'))
})

module.exports = router