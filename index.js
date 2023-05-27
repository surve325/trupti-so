var player1Name = prompt("Enter Player 1 Name");
var player2Name = prompt("Enter Player 2 Name");
document.querySelector(".container>.dice p").innerHTML=`Player 1: ${player1Name}`;
document.querySelector("body > div > div:nth-child(3) > p").innerHTML=`Player 2: ${player2Name}`;

var randomNumber1 = Math.floor(Math.random()*6)+1;
var selectRandomImg = `assets/dice${randomNumber1}.png`;

document.querySelector(".img1").setAttribute("src",selectRandomImg);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var selectRandomImg2 = `assets/dice${randomNumber2}.png`;

document.querySelector(".img2").setAttribute("src",selectRandomImg2);




if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=`${player1Name} will give party!`;
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=`${player2Name} will give party!`
}
else{
    document.querySelector("h1").innerHTML=`Draw!!`
}