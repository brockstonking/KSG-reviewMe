const express = require('express');
require('dotenv').config();
const massive = require('massive');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const app = express();

const { SERVER_PORT, DASHBOARD_URL, SESSION_SECRET } = process.env;

app.use(cors());
app.use(bodyParser.json());

massive(DASHBOARD_URL)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1200000 }
}))

app.use(express.static(path.join(__dirname, '/build')));

app.use( (req, res, next) => {
  console.log(Date(), req);
  next();
})

app.use(require('./router'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, "build")
  })
});

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${ SERVER_PORT }`);
})