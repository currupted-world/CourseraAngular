(function (){
    'use strict';

    angular.module("NameCalculator",[])
    .controller("NameCalculatorController", function ($scope){
        $scope.name = "";
        $scope.totelValue = 0;


    $scope.displayNumeric = function (){
        var totelNameValue = 
        calculateNumericForString($scope.name);
        $scope.totelValue  = totelNameValue;
    };

     function calculateNumericForString(string) {
        var totelStringValue = 0;
        for (let i = 0; i < string.length; i++) {
             totelStringValue += string.charCodeAt(i);            
        }
        return totelStringValue;        
     }


    });
})();