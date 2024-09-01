var playerOne = Math.floor((Math.random() * 6) + 1);
var playerTwo = Math.floor((Math.random() * 6) + 1);
var imgArray = document.querySelectorAll("img");
imgArray[0].setAttribute("src","./images/dice"+playerOne+".png");
imgArray[1].setAttribute("src","./images/dice"+playerTwo+".png");
if(playerOne > playerTwo){
    document.querySelector("h1").innerHTML="Player 1 Won!";
}
else if(playerTwo > playerOne){
    document.querySelector("h1").innerHTML="Player 2 Won!";
}
else if(playerOne === playerTwo){
    document.querySelector("h1").innerHTML="Draw!";
}
