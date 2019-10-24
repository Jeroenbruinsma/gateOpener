const express = require("express")
const bodyParser = require('body-parser')
const {port} = require('./constants')

const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)

app.listen(port , () => console.log("Server running on port", port) )

app.get('/', (request, response) => {
    console.log("got an request on /")
    response.status(418)
    response.send("Hello world")
})
 
app.post('/gate', (request, response) => {
    console.log("got an post request on /gate")
    response.status(200)
    response.send({status: "GATE_OPEN"})

})
