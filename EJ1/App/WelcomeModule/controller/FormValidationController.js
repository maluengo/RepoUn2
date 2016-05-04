/**
 * Created by ML-Duoc on 02/05/2016.
 */

//Generar nuestro modulo
//Nota: [] angularJS en el arreglo
    
var app = angular.module('LoginFormModule', []);


// Controller.

//app = identificador q representa el modulo
//controller = recibe 3 argumentos)
app.controller('LoginFormController', function ($scope, $http) {

//Modelo, entidad generada para sustentar la vista(view)
    //Generacion de objetos con $scope

    $scope.formModel = {};

    //funcion que llama al submit

    $scope.onSubmit = function () {
     console.log("Llegue, primer submit con AngularJS")
        console.log($scope.formModel);

      //next: llamadas HTTP

    };


});