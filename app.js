const express = require('express');
var cors = require('cors');
var emplyeeList = require('./employee.json');
var customer = require('./customer.json');
var bodyParser = require('body-parser');
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
const app = express();
const port = 8000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*employee List*/
app.get('/employees', (req, res) => res.send(emplyeeList));

/*add new employee to a List */
app.post('/employees', (req, res) => {
emplyeeList.push(req.body);
res.send(emplyeeList)});

/*customer List*/
app.get('/customers', (req, res) => res.send(customer));

/* Add customers */
/*add new employee to a List */
app.post('/customers', (req, res) => {
  customer.push(req.body);
  res.send('success')});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/*websocket server */
server.on('connection', socket => {
    console.log('websocket starts');
    socket.on('message', message => {
      console.log(`received from a client: ${message}`);
    });
  
  setInterval(function(){ socket.send(`Rakshith websocket Timer!  :  ${new Date()} `); }, 3000);
    
  });