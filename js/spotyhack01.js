(function (global){

	'use strict';

  var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ');
  
  var response;
	xhr.onload = function () {
    if (this.status === 200) { // the result is OK
      response = JSON.parse(this.response);
      console.log('onload response', response);

    }
    loadcontent();
     
  };

  var loadcontent = function(){

    var widget = document.querySelector('.widget');
    //var audio=widget.getElementById('audio');
    var title = widget.getElementsByClassName('title')[0];
    var author = widget.getElementsByClassName('author')[0];
    var image = widget.querySelector('#img');


    title.textContent = response.name;
    author.textContent = response.artists[0].name;
    image.src = response.album.images[0].url;
  }
  
  

  // send the request
  xhr.send();

})(window);