(function () {
    'use strict';

    var x = "hello";

    angular.module('MyFirstApp', [])
        .controller('MyFirstController', function ($scope) {
            $scope.name = "Rameshwar";
            $scope.sayHello = function () {
                return "Hello My dear Freinds........";
            }

        });

})();