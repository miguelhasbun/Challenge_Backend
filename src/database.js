const mysql= require('mysql');

const mysqlconnection= mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'challenge'
    }
);

mysqlconnection.connect(function (err) {
    if (err){
        console.log (err);
        return;
    }else{
        console.log ('Base de datos conectada');
    }
});

module.exports= mysqlconnection;