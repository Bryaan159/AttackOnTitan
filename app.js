var introMusic = document.getElementById("introMusic");
var playMusic = document.getElementById("playMusic");
    
    function playSound(){
        if(introMusic.paused){
            introMusic.play();
            playMusic.src="images/pause.png";
        }
        else{
            introMusic.pause();
            playMusic.src="images/play.png";
        }
        
    }