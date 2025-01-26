let boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-game');
let winnerMsg = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let msgSpan = document.querySelector('.msg span');

let BtnCount = 0;
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.innerText = turnO ? 'O' : 'X';
        BtnCount++;
        box.disabled = true;
        turnO = !turnO; // Toggle turn

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos1 === pos2 && pos1 === pos3) {
            showWinner(pos1);
            return; 
        }
    }

    if (BtnCount === 9) { 
        gameDraw();
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, <span>${winner}</span> Won The Game!`;
    winnerMsg.classList.remove('hide');
    boxes.forEach((box) => {
        box.disabled = true; 
    });
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    turnO = true; 
    winnerMsg.classList.add('hide'); 
    BtnCount = 0;
    msg.innerText = ""; 
    msgSpan.innerText = "";
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    winnerMsg.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true; 
    });
};

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);