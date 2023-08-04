for (var i=0; i<document.querySelectorAll(".buttons").length;i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",clickAudio);

}
function clickAudio(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
    
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    if(key == "W" || key == "w"){
        var audio=new Audio("sounds/tom_1.mp3");

     }
     else if(key == "A" || key == "a"){
         var audio=new Audio("sounds/tom_2.mp3");
        
      }
     else if( key == "S" || key == "s"){
         var audio=new Audio("sounds/tom_3.mp3");
        
      }
     else if( key == "D" || key == "d"){
         var audio=new Audio("sounds/tom_4.mp3");
        
      }
     else if( key == "J" || key == "j"){
         var audio=new Audio("sounds/snare.mp3");
        
      }
     else if( key == "K" || key == "k"){
         var audio=new Audio("sounds/crash.mp3");
        
      }
     else if( key == "L" || key == "l"){
         var audio=new Audio("sounds/kick.mp3");
         
    }
    else {
        alert("Select the right one ");
    }

      audio.play();
    
}

function buttonAnimation(key){
    document.querySelector("."+ key ).classList.add("press");

    // time function for animation time
    setTimeout(function(){
        document.querySelector("."+ key ).classList.remove("press");
    },100);
    

}
