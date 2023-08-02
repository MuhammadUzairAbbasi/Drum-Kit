
for (var i=0; i<document.querySelectorAll(".buttons").length;i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",playAudio);

}

function playAudio(){
    
    if((this.innerHTML) == "W"){
        var audio=new Audio("sounds/tom_1.mp3");

     }
     else if(this.innerHTML =='A'){
         var audio=new Audio("sounds/tom_2.mp3");
        
      }
     else if( this.innerHTML =='S'){
         var audio=new Audio("sounds/tom_3.mp3");
        
      }
     else if( this.innerHTML == 'D'){
         var audio=new Audio("sounds/tom_4.mp3");
        
      }
     else if( this.innerHTML == 'J'){
         var audio=new Audio("sounds/snare.mp3");
        
      }
     else if( this.innerHTML == 'K'){
         var audio=new Audio("sounds/crash.mp3");
        
      }
     else if( this.innerHTML == 'L'){
         var audio=new Audio("sounds/kick.mp3");
         
      }
      else {
        alert("Select the right one ");
      }

      audio.play();
}

