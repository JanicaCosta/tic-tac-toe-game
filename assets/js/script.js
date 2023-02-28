const cells = document.querySelectorAll(".cell");

let checkTurn = true ;

let combinations = [
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
            startGame(event.target.id);
    }
};

function startGame(id) {
    let cell = document.getElementById(id);
    turn = checkTurn ? player_X : player_O;
    cell.textContent = turn;
    checkTurn = !checkTurn;
    cell.classList.add(turn);
    checkWiner(turn);
    checkWiner(turn);

}

function checkWiner(turn) {
    const winer = combinations.some((comb) => {
        return comb.every((index) => {
          return cells[index].classList.contains(turn);
        });
      });
    
      if (winer) {
        gameCompleted(turn);
      } else if (checkDraw()) {
        gameCompleted();
      } else {
        checkTurn = !checkTurn;
      }
    }


function checkDraw(){
  let x = 0;
  let o = 0;
  for (index in cells) {
    if (!isNaN(index)) {
      if (cells[index].classList.contains(player_X)) {
        x++;
      }

      if (cells[index].classList.contains(player_O)) {
        o++;
      }
    }
  }
  return x + o === 9 ? true : false;
}

function gameCompleted(winer = null){
  endOfGame = true;
  const result = document.getElementById("result");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  let mesage = null;

  result.style.display = "block";
  result.appendChild(h2);
  result.appendChild(h3);

  if (winer) {
    h3.innerHTML =` Player <span>${winer}</span> won`; ;
    } else {
      h2.innerHTML = " draw";
    }

  let timer = 20;
  setInterval(() => {
    h3.innerHTML = "Starting a new game in" + timer-- + "seconds";
  }, 1000);

  setTimeout(() => location.reload(), 20000);
}