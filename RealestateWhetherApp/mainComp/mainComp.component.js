angular
    .module('mainComp')
    .component('mainComp', {
        templateUrl: 'mainComp/mainComp.template.html',
        controller: ['hotelService', function (hotelService) { 
            this.hotels = hotelService.getHotels();
        }]
    });