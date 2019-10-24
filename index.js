const express = require("express")
const bodyParser = require('body-parser')
const {port} = require('./constants')

const app = express()
const jsonParser = bodyParser.json()

//raspberry io config
const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const gateRelay = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output


app.use(jsonParser)

app.listen(port , () => console.log("Server running on port", port) )

app.get('/', (request, response) => {
    console.log("got an request on /")
    response.status(418)
    response.send("Hello world")
})
 
app.post('/gate', (request, response) => {
    console.log("got an post request on /gate")
    openGate()
    response.status(200)
    response.send({status: "GATE_OPEN"})

})

const openGate = () => {
    gateRelay.writeSync(1)
    setTimeout(gateRelay.writeSync(0), 3000); //close  gateRelais after 3 seconds 
    // gateRelay.unexport(); //don't know if we need this. // Unexport GPIO to free resources
}




