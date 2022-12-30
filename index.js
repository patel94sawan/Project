var randomNummber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNummber1 + ".png";

var randomImageSource = "../Dice/images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNummber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if (randomNumber2 > randomNummber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
else {
  document.querySelector("h1").innerHTML = "its a DRAW";
}
