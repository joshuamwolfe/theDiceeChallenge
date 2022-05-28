console.info('JavaScript Properly Linked. Delete me when completed.');

const getRandomNumber = (number) => {
    return Math.floor(Math.random() * number) + 1;
}

let randomNumber1 = getRandomNumber(6);
let randomNumber2 = getRandomNumber(6);


let playerOneDice = document.querySelector('.img1');
playerOneDice.setAttribute("src", `./img/dice${randomNumber1}.png`);

let playerTwoDice = document.querySelector('.img2');
playerTwoDice.setAttribute("src", `./img/dice${randomNumber2}.png`);

