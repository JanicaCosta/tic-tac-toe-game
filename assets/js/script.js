const cells = document.querySelectorAll(".cell");

let checkTurn = true ;

let winerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

/** defining players */

let player_X = "X";
let player_O = "O";

/** defining event when clicking in the space to show either X or O */

document.addEventListener("click", myfunction);

function myfunction(event){
        if(event.target.matches(".cell")){
            play(event.target.id);
    }
};

function play(id) {
    let cell = document.getElementById(id);
    turn = checkTurn ? player_X : player_O;
    cell.textContent = turn;
    checkTurn = !checkTurn;
}

function checkWiner() {

}

function checkDraw(){

}

function gameCompleted(){

}