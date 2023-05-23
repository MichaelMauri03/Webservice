const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
   'webservice',
   'root',
   '',
    {
      host: 'localhost',
      password:'',
      dialect: 'mysql',
      define:{
        timestamps: false,
        freezeTableName: true 
      }
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = {
  Sequelize : Sequelize,
  sequelize : sequelize
}

