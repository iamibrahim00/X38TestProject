const Sequelize = require('sequelize');

const sequelize = new Sequelize('x38test', 'root', '12345', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize; 
 