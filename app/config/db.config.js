module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    // DB: "crud",
    DB: "db_nodejstest",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

};

// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
// });

// db.connect(function(error){
//     if(error){
//         console.error(error);
//     } else {
//         console.info("Connected to Database");
//     }
// });

// module.exports = db;