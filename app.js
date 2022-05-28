// global variables
let winnerAnnouncement = document.querySelector('h1');
let randomNumber1 = getRandomNumber(6);
let randomNumber2 = getRandomNumber(6);
let playerTwoDice = document.querySelector('.img2');
let playerOneDice = document.querySelector('.img1');

// random number generator
function getRandomNumber (number) {
    return Math.floor(Math.random() * number) + 1;
}

// roll dice & apply images
playerOneDice.setAttribute("src", `./img/dice${randomNumber1}.png`);
playerTwoDice.setAttribute("src", `./img/dice${randomNumber2}.png`);

// decide winner and announce
if (randomNumber1 > randomNumber2) {
    winnerAnnouncement.innerText = 'PLAYER ONE WINS!';
} else if (randomNumber1 < randomNumber2) {
    winnerAnnouncement.innerText = 'PLAYER TWO WINS!';
} else {
    winnerAnnouncement.innerText = 'tied.';
}