var myApp = angular.module('myApp',[]);
myApp.controller('myController',['$scope','calcService',($scope,calcService)=>{
    // $scope.a = 10;
    // $scope.sum = function(){
    //     return $scope.a + 10;
    // }
    //using http service
    // $http({
    //     url: 'http://localhost:8080/sum?a=10&b=20',
    //     method: 'GET'
    // }).then((response)=>{
    //     debugger;
    //     $scope.sum = response.data;
    // },
    // (response)=>{
    //     alert('an error occurred');
    // });
    //using factory service
    // calcFactory.getSum(10,20,(response)=>{
    //     $scope.sum = response.data;
    // });
    //using service as service
    calcService.getSum(10,20,(response)=>{
        $scope.sum = response.data;
    });
}]);

//custom services
//1.Factory
// myApp.factory('calcFactory',['$http',($http)=>{
//     console.log('instantiating factory services');
//     var oCalcFactory = {};
//     //
//     oCalcFactory.getSum = (a,b,cb)=>{
//         $http({
//             url: 'http://localhost:8080/sum?a='+a+'&b='+b,
//             method: 'GET'
//         }).then((response)=>{
//             //debugger;
//             cb(response);
//         },
//         (response)=>{
//             alert('an error occurred');
//         });
//     }
//     return oCalcFactory;
// }]);

//2. As a service

myApp.service('calcService',['$http',($http)=>{
    console.log('calcService initialize');
    this.getSum = (a,b,cb)=>{
        $http({
            url: 'http://localhost:8080/sum?a='+a+'&b='+b,
            method: 'GET'
        }).then((response)=>{
            //debugger;
            cb(response);
        },
        (response)=>{
            alert('an error occurred');
        });
    }
}])