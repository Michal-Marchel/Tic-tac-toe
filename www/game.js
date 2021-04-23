export class Game {
    constructor() {
        this.player = true;
        this.board = [[], [], []];
    }
    move(move1, move2) {
        if (this.player) {
            if (!this.board[move1][move2]) {
                this.board[move1][move2] = "X";
                this.player = false;
            }
        }
        else if (!this.board[move1][move2]) {
            this.board[move1][move2] = "O";
            this.player = true;
        }
    }
    diagonal(player) {
        if (this.board[1][1] == player) {
            if ((this.board[0][0] == player && this.board[2][2] == player) ||
                (this.board[0][2] == player && this.board[2][0] == player)) {
                return true;
            }
        }
        return false;
    }
    horizontal(player) {
        //i = columnas
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] == player &&
                this.board[i][1] == player &&
                this.board[i][2] == player) {
                return true;
            }
        }
    }
    vertical(player) {
        //i = filas
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] == player &&
                this.board[1][i] == player &&
                this.board[2][i] == player) {
                return true;
            }
        }
    }
    isFinished() {
        return this.boardIsFull() || this.playerWon();
    }
    playerWon() {
        const playerCheck = !this.player ? "X" : "O";
        if (this.diagonal(playerCheck) ||
            this.horizontal(playerCheck) ||
            this.vertical(playerCheck)) {
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
Game.player_O = "O";
Game.player_X = "X";
