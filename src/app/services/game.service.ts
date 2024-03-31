import { Injectable } from '@angular/core';

export enum Player {
  X,
  O
}

export interface Cell {
  row: number;
  col: number;
  value: Player | null;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private board: any = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => ({ value: null }))
  );
  currentPlayer: Player = Player.X;

  constructor() {}

  getBoard(): Cell[][] {
    return this.board;
  }

  setCell(row: number, col: number): void {
    if (this.board[row][col].value === null) {
      this.board[row][col] = { row, col, value: this.currentPlayer };
      if (this.checkForWin()) {
        this.currentPlayer = this.currentPlayer === Player.X? Player.O : Player.X;
      } else {
        this.currentPlayer = this.currentPlayer === Player.X? Player.O : Player.X;
      }
    }
  }

  isGameFinished(): boolean {
    return this.checkForWin() || this.checkForDraw();
  }

  isNextPlayerX(): boolean {
    return this.currentPlayer === Player.X;
  }

   checkForWin(): boolean {
    // check for win in rows
    for (let row of this.board) {
      if (row[0].value && row[0].value === row[1].value && row[1].value === row[2].value) {
        return true;
      }
    }

    // check for win in columns
    for (let col = 0; col < 3; col++) {
      if (this.board[0][col].value && this.board[0][col].value === this.board[1][col].value && this.board[1][col].value === this.board[2][col].value) {
        return true;
      }
    }

    // check for win in diagonals
    if (this.board[0][0].value && this.board[0][0].value === this.board[1][1].value && this.board[1][1].value === this.board[2][2].value) {
      return true;
    }
    if (this.board[0][2].value && this.board[0][2].value === this.board[1][1].value && this.board[1][1].value === this.board[2][0].value) {
      return true;
    }

    return false;
  }

  private checkForDraw(): boolean {
    // check if all cells are filled
    for (let row of this.board) {
      for (let cell of row) {
        if (cell.value === null) {
          return false;
        }
      }
    }
    return true;
  }
}