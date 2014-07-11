(function (globa){

	'use strict';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ');

	xhr.onload = function () {
      if (this.status === 200) { // the result is OK
        var response = JSON.parse(this.response);
        console.log('onload response', response);
      }
    };

    // send the request
    xhr.send();

})(window);