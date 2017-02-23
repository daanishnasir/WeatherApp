angular.module('weather').controller('mainCtrl', function($scope, mainServices){




$scope.getWeather = function(zip){
  mainServices.getWeather(zip).then(function(response){
      $scope.weather = response.data;
      console.log(response);
  });
};

$scope.getWeather(78501);



});



//response is the JSON respone/the file that we are getting back     soo response.data to access the shit we want.
