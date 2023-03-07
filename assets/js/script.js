const cells = document.querySelectorAll(".cell");

let checkTurn = true ;

const combinations = [
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

let playerX = "X";
let playerO = "O";

/** defining event when clicking in the space to show either X or O */

cells.forEach(function (cell) {
  cell.addEventListener("click", function cellClickCheck(event) {
    cellClickedCallback(this);
  })
})

function cellClickedCallback(cell) {
    turn = checkTurn ? playerX : playerO;
    cell.textContent = turn;
    checkTurn = !checkTurn;
    // 'X' or 'O' are being added to check the winner not for styling purposes
    cell.classList.add(turn);
    checkWinner(turn);

}

function checkWinner(turn) {
    const winner = combinations.some((comb) => {
        return comb.every((index) => {
          return cells[index].classList.contains(turn);
        });
      });
    
      if (winner) {
        gameCompleted(turn);
      } else if (checkDraw()) {
        gameCompleted();
      } 
    }


function checkDraw(){
  let x = 0;
  let o = 0;
  for (index in cells) {
    if (!isNaN(index)) {
      if (cells[index].classList.contains(playerX)) {
        x++;
      }

      if (cells[index].classList.contains(playerO)) {
        o++;
      }
    }
  }
  return x + o === 9 ? true : false;
}

function gameCompleted(winner = null){
  endOfGame = true;
  const result = document.getElementById("result");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");

  result.style.display = "block";
  result.appendChild(h2);
  result.appendChild(h3);

  if (winner) {
    h3.innerHTML =` Player <span>${winner}</span> won`; ;
    } else {
      h2.innerHTML = " draw";
    }

  let timer = 20;
  setInterval(() => {
    h3.innerHTML = "Starting a new game in" + timer-- + "seconds";
  }, 1000);

  setTimeout(() => location.reload(), 20000);
}