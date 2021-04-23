import { Game } from "./game.js";

console.log("Juego 1");
const game = new Game();
game.move(0, 0);
game.move(0, 1);
game.move(1, 1);
game.move(0, 2);
game.move(2, 2);
console.assert(game.isFinished(), "The game didn't finish");
console.assert(game.playerWon(), "The player X has won");
console.assert(!game.playerWon(), "The player O has lost");

console.assert(game.boardIsFull(), "The board is not full");

console.assert(game.boardIsFull(), "The board is not full");
game.move(0, 0);
console.assert(game.boardIsFull(), "The board is not full");
game.move(0, 1);
console.assert(game.boardIsFull(), "The board is not full");
game.move(0, 2);
console.assert(game.boardIsFull(), "The board is not full");
game.move(1, 0);
console.assert(game.boardIsFull(), "The board is not full");
game.move(1, 1);
console.assert(game.boardIsFull(), "The board is not full");
game.move(1, 2);
console.assert(game.boardIsFull(), "The board is not full");
game.move(2, 0);
console.assert(game.boardIsFull(), "The board is not full");
game.move(2, 1);
console.assert(game.boardIsFull(), "The board is not full");
game.move(2, 2);
console.assert(game.boardIsFull(), "The board is full");

console.log("Juego 2");
const game2 = new Game();

game2.move(0, 0);
game2.move(1, 1);
game2.move(2, 2);
console.assert(game2.isFinished(), "El jugador no ha ganado");

console.log("Juego 3");
const game3 = new Game();

game3.move(0, 0);
game3.move(1, 1);
game3.move(2, 2);
console.assert(game3.playerWon(), "El jugador no ha ganado diagonalmente");

console.log("Juego 4");

const game4 = new Game();

game4.move(0, 0);
game4.move(1, 0);
game4.move(2, 0);
console.assert(game4.playerWon(), "El jugador no ha ganado verticalmente");

console.log("Juego 5");

const game5 = new Game();

game5.move(0, 0);
game5.move(0, 1);
game5.move(0, 2);
console.assert(game5.playerWon(), "El jugador no ha ganado horizontalmente");

console.log("Juego 6");
const game6 = new Game();

game6.move(0, 0);
console.log(game6.board);
game6.move(1, 1);
console.log(game6.board);
game6.move(0, 1);
console.log(game6.board);
game6.move(2, 0);
console.log(game6.board);
game6.move(0, 2);
console.log(game6.board);
console.assert(game6.isFinished(), "El juego no ha terminado");
console.assert(game6.playerWon(), "El jugador no ha ganado");
