import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.scss']
})
export class ConnectFourComponent {
  rows: number[][] = [];
  currentPlayer: number = 1; // 1 for Red, 2 for Yellow
  winner: number | null = null;
  cols = 7;
  rowsCount = 6;

  constructor() {
    this.reset();
  }

  ngOnInit(){
    setTimeout(() => {
      this.reset();
    }, 0)
  }

  reset() {
    this.rows = Array(this.rowsCount).fill(null).map(() => Array(this.cols).fill(0));
    this.currentPlayer = 1;
    this.winner = null;
    console.log("@@@@@@",  this.rows)
  }

  dropPiece(col: number) {
    if (this.winner) return;
    const row = this.getNextAvailableRow(col);
    if (row === -1) return; // Column is full

    this.rows[row][col] = this.currentPlayer;
    if (this.checkWinner(row, col)) {
      this.winner = this.currentPlayer;
      return;
    }
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  getNextAvailableRow(col: number): number {
    for (let row = this.rowsCount - 1; row >= 0; row--) {
      if (this.rows[row][col] === 0) {
        return row;
      }
    }
    return -1;
  }

  checkWinner(row: number, col: number): boolean {
    // Check vertically
    let count = 1;
    count += this.checkDirection(row, col, 1, 0);
    count += this.checkDirection(row, col, -1, 0);
    if (count >= 4) return true;

    // Check horizontally
    count = 1;
    count += this.checkDirection(row, col, 0, 1);
    count += this.checkDirection(row, col, 0, -1);
    if (count >= 4) return true;

    // Check diagonally
    count = 1;
    count += this.checkDirection(row, col, 1, 1);
    count += this.checkDirection(row, col, -1, -1);
    if (count >= 4) return true;

    count = 1;
    count += this.checkDirection(row, col, 1, -1);
    count += this.checkDirection(row, col, -1, 1);
    if (count >= 4) return true;

    return false;
  }

  checkDirection(row: number, col: number, rowDir: number, colDir: number): number {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;
    while (r >= 0 && r < this.rowsCount && c >= 0 && c < this.cols && this.rows[r][c] === this.currentPlayer) {
      count++;
      r += rowDir;
      c += colDir;
    }
    return count;
  }
}