const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
{
  database: 'latihan_eduwork', 
  username: 'root',
  password: 'root',
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;