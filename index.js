var n = document.querySelectorAll(".drum").length;
//this is for detecting key of button click
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //Ananomas function functionName()
    //alert("I got clicked");
    //var audio=new Audio("sounds/tom-1.mp3");
    //audio.play();
    //  console.log(this);
    //  console.log(this.innerHTML);
    //this.style.color="white";
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

}
//this is detecting key of keyboard press
document.addEventListener("keydown", function(event) {
  //console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

//create fuction for sount
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
