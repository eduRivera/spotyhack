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
  };
  var widget=document.querySelector('.widget');
  //var audio=widget.getElementById('audio');
  var title=widget.querySelector('.title');
  title.contentText=response.name;
  // send the request
  xhr.send();

})(window);