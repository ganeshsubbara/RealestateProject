var hotelService= angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
        var hotels=[
            {
                id: 1,
                name: "Chennai Villa",
                address: "Chennai,India",
                city: "Chennai",
                imagePath: 'images/img1.jpeg',
                price: '400000',
                details: "VILLA 1"

            
            },
            {
                id: 2,
                name: " Banglore Villa",
                address: "Banglore",
                city: "Bangalore",
                imagePath: 'images/img2.jpeg',
                price: '450000',
                details: "VILLA 2"

            },
            {
                id: 3,
                name: "Delhi villa",
                address: "Delhi, India",
                city: "Delhi",
                imagePath: 'images/img3.jpeg',
                price: '6000000',
                details: "VILLA 3"

            },
            {
                id: 4,
                name: "Texas villa",
                address: "Texas,Usa",
                city: "Texas",
                imagePath: 'images/img4.jpeg',
                price: '309900',
                details: "VILLA 4"

            },
            {
                id: 5,
                name: " Banglore Villa-2",
                address: "Banglore",
                city: "Bangalore",
                imagePath: 'images/img6.jpeg',
                price: '900500',
                details: "VILLA 5"

            },
            {
                id: 6,
                name: "Chicago Villa",
                address: "Chicago,Usa",
                city: "Chicago",
                imagePath: 'images/img5.jpeg',
                price: '700099',
                details: "VILLA 6"

            },
            {
                id: 7,
                name: "Dallas Villa",
                address: "Dallas,Usa",
                city: "Dallas",
                imagePath: 'images/img6.jpeg',
                price: '500000',
                details: "VILLA 7"

            },
            {
                id: 8,
                name: "Chennai Villa-2",
                address: "Chennai,India",
                city: "Chennai",
                imagePath: 'images/img2.jpeg',
                price: '400099',
                details: "VILLA 8"

            
            },
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getHotelById= function(id){
            return hotels.find(function(hotel){
                return hotel.id== id;
            });
        };
    }]);