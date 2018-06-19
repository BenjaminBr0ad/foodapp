$( document ).ready(function(){
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });

  $('.chips').material_chip();
  $('.chips-initial').material_chip({
    data: [{
    }],
  });
  $('.chips-placeholder').material_chip({
    placeholder: 'New ingredient',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').material_chip({
    autocompleteOptions: {
      data: {

      },
      limit: Infinity,
      minLength: 0
    }
  });


}) // End Document Ready


var username = "Ben"
var ingredients = "flour, corn, butter"
function myFunction() {
  document.getElementById("name").innerHTML = "Hello World"
}
function picture() {
  $("#user-icon").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2V9SJwM3b4RpH7Si6PiqJpNGOmxt6252imu0O7uXPc_1d1zt)")
}
function users() {
  document.getElementById("demo").append(username + ": " + ingredients)
}
function inscructions() {
  document.getElementById("instructions").innerHTML = "yeppo"
}
// inscructions()
// myFunction()
// picture()
// users()