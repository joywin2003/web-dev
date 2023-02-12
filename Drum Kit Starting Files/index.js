var numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var ButtonInnerHtml = this.innerHTML;
    makeSound(ButtonInnerHtml);
    buttonAnimation(ButtonInnerHtml);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(choice) {
  switch (choice) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(choice);
  }
}

function buttonAnimation(currentkey) {
  var activeKey = document.querySelector("." + currentkey);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
