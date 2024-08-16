const mysql = require("mysql");

const db = mysql.createConnection(({
    host: "localhost",
    user: "root",
    password: "sh@kirter2007",
    database: "shop free",
}));

db.connect((err, data)=>{
    if(err){
        console.error("Error connecting to database", err);
    } else{
        console.log("Connected To Mysql Database");
    }
});


module.exports = db;