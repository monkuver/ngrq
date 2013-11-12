define(function(require){
    return require('angular').module('app',[])
        .controller('fCtrl',['$scope','$http', require('controllers/fCtrl')])
})