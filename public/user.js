$( document ).ready(function(){
  // ---- Sidenav settings
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
  });
  // ---- Chip functionality & settings
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
  // ---- Retrieving userID from jwt
  function parseJWT (token) {
       var base64Url = token.split('.')[1];
       var base64 = base64Url.replace('-', '+').replace('_', '/');
       return JSON.parse(window.atob(base64));
     };
  const userData = parseJWT(document.cookie)
  const id = userData.userId
  // ---- Populating username on the user.html
  $.get(`api/users/${id}`)
    .done(result => {
      $('#username-text').text(`${result[0].username}'s Profile`)
    })
    .fail(result => {
      console.log('.fail result: ', result);
    })
  //---- Loading previously stored ingredients
  $.get(`api/users/${id}/ingredients`)
    .done(result => {
      const ingredientArray = result[0].id
      console.log(ingredientArray);
      for (let elem of ingredientArray) {
        $('#prevIngredients').append(`<div class="chip">${elem.name}<i class="close material-icons">close</i></div>`)
      }
    })
    .fail(result => {
      console.log('.fail result: ', result);
    })
  // ---- Saving current ingredients
  $('#save-button').on('click', function () {
    // $.post(`/api/users/${id}/ingredients`, id)
    //   .done(result => {
    //
    //   })
    //   .fail(result => {
    //
    //   })
  })


}) // End Document Ready
