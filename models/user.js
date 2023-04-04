const Sequelize = require('sequelize');
const sequelize = require('../lib/db-connection');

const User = sequelize.define('users', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Surname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  var: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync();

module.exports = User;