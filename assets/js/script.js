const cells = document.querySelectorAll(".cell");

let checkTurn = true ;

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