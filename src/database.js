const mysql= require('mysql');

const mysqlconnection= mysql.createConnection(
    {
        host: 'bgubbofvj8ivfivrwcqu-mysql.services.clever-cloud.com',
        user: 'ujjdxh8btaetyp70',
        password: 't3eaGvq6Ya9HQZq7wDzi',
        database: 'bgubbofvj8ivfivrwcqu'
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