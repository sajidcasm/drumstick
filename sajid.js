

var drumsize = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumsize; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {


        var bttn = this.textContent;
        makesound(bttn);
       
    });

    document.addEventListener("keypress" ,function(event){

        makesound(event.key);
        buttontransition(event.key);

    })


   
    // easy yehi hai bhai, itna time waste krne ke bad
}

function makesound(key){

    switch(key){


        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;


        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;


        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;


        case "j":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;


        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;


        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;


        default : console.log(bttn);

    }

}

function buttontransition(currentkey){

   var a= document.querySelector("."+currentkey);

   a.classList.add("pressed");

   setInterval(()=>{
    a.classList.remove("pressed");

   },1000)

}

// var audio = new Audio("sounds/crash.mp3");
// audio.play();

