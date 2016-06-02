/**
 * Created by ML-Duoc on 25/05/2016.
 */

/** **/
var restify = require('restify');
var mongojs = require('mongojs');

/** Vinculacion con DB en MongoLAB **/

var db = mongojs('mongodb://admin:admin@ds053858.mlab.com:53858/db_dai_un2', ['product']);

/** Referencia al server con NodeJS **/

/** Creacion de la DB **/
var server = restify.createServer();

/** Configuracion para aceptacion de formatos **/
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

/** Levantamiento de servidor **/

server.listen(3000, function () {
    console.log("Servidor iniciado en el puerto 3000");
});

/**
server.get("/product",function (req, res, next) {
    res.send("PRIMERA PETICION, GET sobre nuestro servidor. ");
    return next();

});
**/

server.get("/product",function (req, res, next) {
    db.product.find(function (err, data) {
        res.writeHead(200,{
            'Content Type:' : 'application/json charset=utf-8'
        });
        res.end(JSON.stringify(data));

    });
});

module.exports = server;