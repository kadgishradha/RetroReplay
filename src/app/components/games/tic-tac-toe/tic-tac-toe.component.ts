import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cell, Player, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner(row, col)) {
        this.winner = this.currentPlayer;
      } else if (this.checkTie()) {
        this.winner = 'Tie';
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  startNewGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = null;
    this.currentPlayer = 'X';
  }

  private checkWinner(row: number, col: number): boolean {
    const player = this.board[row][col];

    // Check row
    let rowCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.board[row][i] === player) {
        rowCount++;
      }
    }
    if (rowCount === 3) {
      return true;
    }

    // Check column
    let colCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.board[i][col] === player) {
        colCount++;
      }
    }
    if (colCount === 3) {
      return true;
    }

    // Check diagonal
    if ((this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
        (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)) {
      return true;
    }

    return false;
  }

  private checkTie(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return false; // If any cell is empty, game is not tied
        }
      }
    }
    return true; // All cells are filled, game is tied
  }
}