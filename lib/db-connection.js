const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'webservice',
   'root',
   '08030605Pippo',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const User = require('../models/user');

module.exports = {
  User,
  sequelize,
};

