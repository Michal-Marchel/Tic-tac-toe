import { Game } from "./game.js";
let newGame: Game;
const tds = document.querySelectorAll("td");
const button = document.querySelector("button");
const div = document.querySelector("body div div");

function getPlayerCharacter() {
  if (newGame.player) {
    return "X";
  }
  return "O";
}

function tdMove(e: MouseEvent) {
  const playerSymbol = getPlayerCharacter();
  const td = e.target as HTMLTableDataCellElement;
  const positionX = parseInt(td.dataset.x!, 10);
  const positionY = parseInt(td.dataset.y!, 10);

  if (td.textContent !== "X" && td.textContent !== "O") {
    td.textContent = playerSymbol;
  }
  newGame.move(positionX, positionY);
  if (newGame.isFinished()) {
    if (newGame.playerWon()) {
      for (let i = 0; i < 9; i++) {
        tds.item(i).onclick = null;
        div!.textContent = `The player ${playerSymbol} won the game`;
      }
    } else {
      div!.textContent = "It was a draw";
    }
  }
}

button!.addEventListener("click", () => {
  div!.textContent = "";
  for (let i = 0; i < 9; i++) {
    tds.item(i).onclick = tdMove;
  }
  for (let i = 0; i < 9; i++) {
    tds.item(i).textContent = "";
  }
  newGame = new Game();
});
