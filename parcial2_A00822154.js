//Parcial 2
// Conexión Base de Datos Node

//A00822154
//Roberto Mendívil

//Uso de Maria DB con JavaScript

//Agregamos paquete necesario para concetar DB
var mysql = require('mysql');


//Parámetros de conexión MariaDB
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rrrmc",
    database: 'Parcial2_A00822154_Mayo10'
});


//Conexión Node -> MariaDB
con.connect(function(err) {
    if (err) throw err;
    console.log("BASE DE DATOS CONECTADA - Roberto!");
    

    //Query para Insertar
    var sql_insert = "INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Brandon', '12345','correo@inventado.mx','LDI')";
    con.query(sql_insert, function (err, result) {
        if (err) throw err;
        console.log("Datos insertados");
    });


    //Query para Update
    var sql_update = "UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2";
    con.query(sql_update, function (err, result) {
        if (err) throw err;
        console.log("Datos Actualizados");
    });

     //Query para Delete
     var sql_delete = "DELETE FROM Alumnos WHERE Id = 2";
     con.query(sql_delete, function (err, result) {
         if (err) throw err;
         console.log("Datos Borrados");
     });


    //Query para Desplegar
    var sql = 'SELECT * FROM Alumnos  LIMIT 10';
    con.query(sql, function (err, result) {
      if (err) throw err;
        //Mostramos nombres y carrera
     console.log(result);
     });



  });

