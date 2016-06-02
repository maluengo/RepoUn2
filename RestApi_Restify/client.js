/**
 * Created by ML-Duoc on 25/05/2016.
 */

var restify = require('restify');
var server = require('./server');

var client = restify.createJSONClient({url: 'http://localhost:3000'});
var myProduct = {
    id: "4",
    name: "recien insertado",
    descripcion: "sobre mongodb",
    por: "mattd",
    valor: "9123",
    estado: "enviado"
};


client.post('product',myProduct,function (err, req, res, product) {
    if (err)

    {
        console.log("Ups!, algo paso");
        console.log(err);
    }else
    {
        console.log("Producto agregado con exito en MongoLab DB");
        console.log(myProduct);

    }
});
