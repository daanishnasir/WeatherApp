angular.module('weather').service('mainServices', function($http){



  this.getWeather= function(zip){
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip +',us&appid=72cfab5749906d720e7dc4652ae6c9cb&units=imperial'

    });
  };




});
