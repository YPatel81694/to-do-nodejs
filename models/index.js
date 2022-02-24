const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

//create the sql connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

/* test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
      })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
      });*/
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.items = require("./toDoItem.js")(sequelize, Sequelize);

module.exports = db;