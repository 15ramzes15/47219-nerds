 var link = document.querySelector(".write-us");
 var popup = document.querySelector(".modal-content");
 var close = document.querySelector(".modal-content-close");
 var form = popup.querySelector("form");
 var login = popup.querySelector("[name=login]");
 var email = popup.querySelector("[name=email]");
 var storage = localStorage.getItem("login");

 link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add ("modal-content-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus(); 
  }
 });

 close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error"); 
 });

 form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error"); 
  } else {
    localStorage.setItem("login", login.value)  
  }  
 });

 window.addEventListener("keydown", function (evt){
  if (evt.keyCode ===27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    } 
  }
 });

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