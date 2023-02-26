const cells = document.querySelectorAll(".cell");

/** defining players */

let player_X = "X";
let player_O = "O";

/** defining event when clicking in the space to show either X or O */

document.addEventListener("click", myfunction);

function myfunction(event){
        if(event.target.matches(".cell")){
            console.log(event.target.id);
    }
};

