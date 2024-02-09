angular.module('weather')
   .component('weather', {
        templateUrl:'weather/weather.template.html',
        controller: ['weatherService', function(weatherService){
            var $ctrl = this;
            $ctrl.city = '';
            $ctrl.weatherData = null;
            $ctrl.error = null;
        
            $ctrl.getWeather = function(){
                console.log("Get weather is working");
                $ctrl.weatherData = null;
                $ctrl.error = null;
        
                weatherService.getWeather($ctrl.city)
                    .then(function(data){
                        $ctrl.weatherData = data;
                    })
                    .catch(function(error){
                        $ctrl.error = 'Error while fetching the weather data:-' + error.message;
                        alert(error.message);
                    });
            };
        }]
        
    });