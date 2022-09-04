const mysql = require("mysql");


//Datos de conexion con la base de datos
const connection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test",
})


//Conexion con la base de datos
connection.connect(function(error) {
    if(error) throw error;
    console.log("Connected!");
})

// connection.end()


//Funcion para evitar desconexion con la base de datos
setInterval(function() {
    connection.query("SELECT 1");
}, 4000);

module.exports = connection;