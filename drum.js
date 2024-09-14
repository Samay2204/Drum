var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i= 0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML;
    //Pressing Button by mouse.................................................
    makeSound(buttoninnerhtml);
    // animated(buttoninnerhtml);
});
}


//Pressing Button by key Press.............................................
document.addEventListener("keypress",function(event){
     makeSound(event.key);
    // console.log(event);
    // animated(event.key);
    
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;
        
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
    
        default:
            break;
    }
}

function animated(currentKey){
 var activebtn = document.querySelector("."+ currentKey);
 activebtn.classList.add(".press");
}