const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    autoIncrement : true,
    primaryKey : true
  },
  firstName : Sequelize.STRING,
  lastName : Sequelize.STRING,
  email : Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter Phone Number" },
      len: { args: [10,10], msg: 'Phone Number is invalid' },
      isInt: { args: true, msg: "You must enter Phone Number" },
    }
  },
  address : Sequelize.STRING,
  companyName : Sequelize.STRING,
  image:Sequelize.BLOB
 

}); 

module.exports = User; 