var express = require('express')
var router = express.Router()
var api_post = require('./api/post/post')

router.use('/api/post',api_post)

module.exports = router