var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice" + a + ".png";
var randomImg2 = "images/dice" + b + ".png";

document.querySelectorAll("img")[0].src = randomImg1;
document.querySelectorAll("img")[1].src = randomImg2;

// Winner Announcment......
if (a > b) {
  document.querySelector("h1").innerHTML = "✨Player 1 Wins";
} else if (b > a) {
  document.querySelector("h1").innerHTML = "Player 2 Wins✨";
} else {
  document.querySelector("h1").innerHTML = "✨Match Draw✨";
}
