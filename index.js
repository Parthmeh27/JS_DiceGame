var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";
 
document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (images1 === images2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
} else if (images1 > images2) {
    document.querySelector(".container h1").innerHTML = "Player 1 wins!";
} else {
    document.querySelector(".container h1").innerHTML = "Player 2 wins!";
}