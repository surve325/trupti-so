var player1Name = prompt("Enter Player 1 Name");
var player2Name = prompt("Enter Player 2 Name");
var player3Name = prompt("Enter Player 3 Name");
var player4Name = prompt("Enter Player 4 Name");

document.querySelector("body > div > div:nth-child(2) > p").innerHTML=`Player 1: ${player1Name}`;
document.querySelector("body > div > div:nth-child(3) > p").innerHTML=`Player 2: ${player2Name}`;
document.querySelector("body > div > div:nth-child(4) > p").innerHTML=`Player 2: ${player3Name}`;
document.querySelector("body > div > div:nth-child(5) > p").innerHTML=`Player 2: ${player4Name}`;


var randomNumber1 = Math.floor(Math.random()*6)+1;
var selectRandomImg = `assets/dice${randomNumber1}.png`;

document.querySelector(".img1").setAttribute("src",selectRandomImg);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var selectRandomImg2 = `assets/dice${randomNumber2}.png`;

document.querySelector(".img2").setAttribute("src",selectRandomImg2);

var randomNumber3 = Math.floor(Math.random()*6)+1;
var selectRandomImg3 = `assets/dice${randomNumber3}.png`;

document.querySelector(".img3").setAttribute("src",selectRandomImg3);

var randomNumber4 = Math.floor(Math.random()*6)+1;
var selectRandomImg4 = `assets/dice${randomNumber4}.png`;

document.querySelector(".img4").setAttribute("src",selectRandomImg4);


if (randomNumber1>=randomNumber2 && randomNumber1>=randomNumber3 && randomNumber1>=randomNumber4){
    document.querySelector("h1").innerHTML=`${player1Name} will give party!`;
}
else if(randomNumber2>=randomNumber1 && randomNumber2>=randomNumber3 && randomNumber2>=randomNumber4){
    document.querySelector("h1").innerHTML=`${player2Name} will give party!`
}
else if(randomNumber3>=randomNumber1 && randomNumber3>=randomNumber2 && randomNumber3 >= randomNumber4) {
    document.querySelector("h1").innerHTML=`${player3Name} will give party`
}
else{
    document.querySelector("h1").innerHTML=`${player4Name} will give party`
}