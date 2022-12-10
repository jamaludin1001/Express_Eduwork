const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
{
  database: 'railway', 
  username: 'root',
  password: 'zxaiAk2uJB6DLdL48uow',
  host: 'containers-us-west-150.railway.app',
  port: '6805',
  url: 'mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}',
  dialect: 'mysql',
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
