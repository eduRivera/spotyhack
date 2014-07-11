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
    var audio = widget.querySelector('#audio');
    var title = widget.getElementsByClassName('title')[0];
    var author = widget.getElementsByClassName('author')[0];
    var image = widget.querySelector('#img');
    var btnPlay = widget.querySelector('.btn-play');
    var playOrStop = 0; //if 0 play, if 1 pause
    var progress = widget.querySelector('progress');
    //var songDuration = Math.floor(parseInt(response.duration));
    var currenTime = 0; 

    /*step 1 change title and artist and image*/
    title.textContent = response.name;
    author.textContent = response.artists[0].name;
    image.src = response.album.images[0].url;

    /*step 2 load mp3 in <audio>*/
    audio.src=response.preview_url;
    btnPlay.addEventListener('click', function (evt){
    /*step 3 play and stop*/ 
      if (playOrStop){
         audio.pause();
         playOrStop = 0;
      }else{
         audio.play();
         playOrStop = 1;
         
      }
     
    });

    audio.addEventListener('progress', function (evt){
      
      var songDuration = Math.floor(audio.duration);
      progress.max = songDuration;
      progress.value = Math.round(audio.currentTime);
      console.log (audio.currentTime);
    });

  }


  // send the request
  xhr.send();

})(window);