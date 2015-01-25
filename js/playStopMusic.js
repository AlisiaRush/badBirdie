//Initial//
var audio, playbtn, mutebtn,seekSlider,seeking,seekto;
	function initAudioPlayer(){
		audio = new Audio();
		audio.src = "audio/music.mp3";
		audio.loop = true;
		audio.play();
		
		//set object references
		playbtn= document.getElementById("playpausebtn");
		mutebtn= document.getElementById("mutebtn");
		seekSlider= document.getElementById("seekSlider");
		volumeSlider= document.getElementById("volumeSlider");
		//add event handling
		playbtn.addEventListener("click",playPause);
		mutebtn.addEventListener("click",mute);
		seekSlider.addEventListener("mousedown", function(event){seeking=true; seek(event);});
		seekSlider.addEventListener("mousemove", function(event){seek(event);});
		seekSlider.addEventListener("mouseup", function(){seeking=false;});
		volumeSlider.addEventListener("mousemove", setvolume);
		
		
		//Functions
		
		function playPause(){
			if(audio.paused){
				audio.play();
				playbtn.style.background = "url(img/audioPause.png) no-repeat";
			}else{
				audio.pause();
				playbtn.style.background = "url(img/audioPlay.png) no-repeat";
			}
		}
		
		function mute(){
			if(audio.muted){
				audio.muted = false;
				mutebtn.style.background = "url(img/audioOn.png) no-repeat";
			}
			else{
				audio.muted = true;
				mutebtn.style.background = "url(img/audioOff.png) no-repeat";
			}
		}	
		////////SET SEEKING
		function seek(){
		if(seeking){
		seekSlider.value = event.clientX - seekSlider.offsetLeft;
	    seekto = audio.duration * (seekSlider.value/100);
		audio.currentTime = seekto;
		}
	}
		
		
		///////SET VOLUME
		function setvolume(){
			audio.volume = volumeSlider.value /100;
	}
}
window.addEventListener("load", initAudioPlayer);























