function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9386739,30.3195275,18)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "https://s8.hostingkartinok.com/uploads/images/2017/05/1118c42c413b5f2f8f743dabf0a67f6a.png";
  var myLatLng = new google.maps.LatLng(59.9387984,30.3233291,21);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);