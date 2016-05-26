/**
 * Created by ML-Duoc on 25/05/2016.
 */

/** **/
var restify = require('restify');
var mongojs = require('mongojs');

/** Vinculacion con DB en MongoLAB **/

var db = mongojs('mongodb://admin:admin@ds053858.mlab.com:53858/db_dai_un2', ['products']);

var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));