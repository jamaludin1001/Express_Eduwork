const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eduwork_cruds"
});
// connection.query("select * from products", (err, result)=>{
//     if (err){
//         return console.log(err)
//     }
//     return console.log(result)
// })
module.exports = connection;

