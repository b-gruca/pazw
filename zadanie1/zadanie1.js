var mysql= require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user : 'root',
password: 'mariadb',
database: 'db_name'
});
connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("polaczono z baza");
    }
});