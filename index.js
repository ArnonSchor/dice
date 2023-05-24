var images=[ 
'images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'
]
var randomNumber1=Math.floor(Math.random()*images.length);
var randomNumber2=Math.floor(Math.random()*images.length);
document.querySelector('.img1').setAttribute('src', images[randomNumber1]);
document.querySelector('.img2').setAttribute('src', images[randomNumber2]);
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 won!"
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 won!🚩"
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!"
}