const gameOverId = document.querySelector("#gameOver");
const scoreId = document.querySelector("#score");
const stars1 = document.querySelector("#stars");

let score = 0;

function moveStars() {
    stars1.style.top = Math.random()*200+'px';
    stars1.style.left = Math.random()*500+'px';
}

setInterval(moveStars, 1000);


function addScore() {
    score = score + 1;
    scoreId.innerText = score;
}
stars1.addEventListener("click", addScore);

function gameOver() {
    gameOverId.style.display = "block";
    stars1.style.display = "none";
}

setTimeout(gameOver, 10000);