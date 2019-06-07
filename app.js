const express = require('express');
var cors = require('cors');
var emplyeeList = require('./employee.json');
var customer = require('./customer.json');
var bodyParser = require('body-parser')
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))