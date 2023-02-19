const resetGameBtn = document.querySelector('.resetGame');
const playerTurnText = document.querySelector('.turnPlayer');
const blocks = document.querySelectorAll('.blocks');

let turn = "X"
let gameOver = false;


// Game logic
blocks.forEach((block) => {
    block.addEventListener('click', () => {
        let player = block.querySelector('.boxtext');
        player.innerHTML = turn;
        turn = checkTurn();
    
        if (!gameOver) {
            playerTurnText.innerHTML = "Turn for " + turn;
        }
        check();
    })
});

// Change Turn from X to O;
function checkTurn() {
    return turn == "X" ? "O" : "X";
}


// function for win

const check = () => {
    const result = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let boxTexts = document.querySelectorAll('.boxtext');

    result.forEach((win) => {
        if ((boxTexts[win[0]].innerText === boxTexts[win[1]].innerText) && (boxTexts[win[1]].innerText === boxTexts[win[2]].innerText) && (boxTexts[win[0]].innerText !== "")) {

            playerTurnText.innerHTML = boxTexts[win[0]].innerText + " Won!";
            gameOver = true;
        }
    })
}




resetGameBtn.addEventListener('click', () => {
    let textBlock = document.querySelectorAll('.boxtext');

    textBlock.forEach(block => {
        block.textContent = "";
    });

    turn = "X";
    gameOver = false;
    playerTurnText.innerHTML = "Turn for " + turn;
})