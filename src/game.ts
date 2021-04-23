export class Game {
  player = true;

  board: Array<Array<"O" | "X">> = [[], [], []];
  //Coordenates of movement
  move(move1: number, move2: number) {
    if (this.player) {
      if (!this.board[move1][move2]) {
        this.board[move1][move2] = "X";
        this.player = false;
      }
    } else if (!this.board[move1][move2]) {
      this.board[move1][move2] = "O";
      this.player = true;
    }
  }

  private diagonal(player: "X" | "O") {
    if (this.board[1][1] == player) {
      if (
        (this.board[0][0] == player && this.board[2][2] == player) ||
        (this.board[0][2] == player && this.board[2][0] == player)
      ) {
        return true;
      }
    }
    return false;
  }

  private horizontal(player: "X" | "O") {
    //i = columnas
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return true;
      }
    }
  }

  private vertical(player: "X" | "O") {
    //i = filas
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return true;
      }
    }
  }

  isFinished() {
    return this.boardIsFull() || this.playerWon();
  }

  playerWon() {
    const playerCheck = !this.player ? "X" : "O";
    if (
      this.diagonal(playerCheck) ||
      this.horizontal(playerCheck) ||
      this.vertical(playerCheck)
    ) {
      return true;
    }
    return false;
  }

  boardIsFull() {
    for (let i = 0; i < 3; i++) {
      for (let x = 0; x < 3; x++) {
        if (!this.board[i][x]) {
          return false;
        }
      }
    }
    return true;
  }
}
