function myMap() {
    var mapCanvas = document.getElementById("map");    
     var geocoder;
     geocoder = new google.maps.Geocoder();
     var latlng = new google.maps.LatLng(38.401291, 24.039005);

     geocoder.geocode( { 'address': 'Περιφερειακή Οδός Αλιβερίου, Αλιβέρι, Ελλάδα'}, function(results, status) {
       if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(latlng);
        var marker = new google.maps.Marker({
            map: map,
            position: latlng
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
     }
    });

    var mapOptions = ({
        center: new google.maps.LatLng(24.039005, 38.401291),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
    var map = new google.maps.Map(mapCanvas, mapOptions);
};