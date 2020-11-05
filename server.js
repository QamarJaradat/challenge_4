var express = require('express')
var server = express()

server.use(express.static('client/dist'));


server.listen(3000, () => {
    console.log("Server Listening on 3000")
})


