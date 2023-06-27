const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
const sequelize = require('./util/database');
const detailsRoutes = require('./routes/addDetails')
const path = require('path')
const app = express();

var cors = require('cors')
var jsonParser = bodyParser.json()

detailsRoutes.use(express.static('public'))
app.use(cors())  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser)

app.use(detailsRoutes)

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });