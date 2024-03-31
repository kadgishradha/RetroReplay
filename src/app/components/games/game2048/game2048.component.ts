import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-game2048',
  templateUrl: './game2048.component.html',
  styleUrls: ['./game2048.component.scss']
})
export class Game2048Component {
  grid!: number[][];
  score!: number;
  gameOver!: boolean;
  gameWon!: boolean;

  constructor() {
    this.initializeGrid();
  }

  initializeGrid() {
    // Initialize grid with zeros
    this.grid = [];
    for (let i = 0; i < 4; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.score = 0;
    this.gameOver = false;
    this.gameWon = false;
    this.addRandomTile();
    this.addRandomTile();
  }

  addRandomTile() {
    let options = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.grid[i][j] === 0) {
          options.push({ x: i, y: j });
        }
      }
    }
    if (options.length > 0) {
      let spot = options[Math.floor(Math.random() * options.length)];
      this.grid[spot.x][spot.y] = Math.random() < 0.9 ? 2 : 4; // 90% chance for 2, 10% chance for 4
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.gameOver  && !this.gameWon) {
      switch (event.key) {
        case 'ArrowUp':
          this.moveUp();
          break;
        case 'ArrowDown':
          this.moveDown();
          break;
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
      }
    }
  }

  moveUp() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
      for (let i = 1; i < 4; i++) {
        if (this.grid[i][j] !== 0) {
          let k = i;
          while (k > 0 && this.grid[k - 1][j] === 0) {
            this.grid[k - 1][j] = this.grid[k][j];
            this.grid[k][j] = 0;
            k--;
            moved = true;
          }
          if (k > 0 && this.grid[k - 1][j] === this.grid[k][j]) {
            this.grid[k - 1][j] *= 2;
            this.score += this.grid[k - 1][j];
            this.grid[k][j] = 0;
            moved = true;
          }
        }
      }
    }
    if (moved) {
      this.addRandomTile();
      this.checkGameOver();
    }
  }

  moveDown() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
      for (let i = 2; i >= 0; i--) {
        if (this.grid[i][j] !== 0) {
          let k = i;
          while (k < 3 && this.grid[k + 1][j] === 0) {
            this.grid[k + 1][j] = this.grid[k][j];
            this.grid[k][j] = 0;
            k++;
            moved = true;
          }
          if (k < 3 && this.grid[k + 1][j] === this.grid[k][j]) {
            this.grid[k + 1][j] *= 2;
            this.score += this.grid[k + 1][j];
            this.grid[k][j] = 0;
            moved = true;
          }
        }
      }
    }
    if (moved) {
      this.addRandomTile();
      this.checkGameOver();
    }
  }

  moveLeft() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        if (this.grid[i][j] !== 0) {
          let k = j;
          while (k > 0 && this.grid[i][k - 1] === 0) {
            this.grid[i][k - 1] = this.grid[i][k];
            this.grid[i][k] = 0;
            k--;
            moved = true;
          }
          if (k > 0 && this.grid[i][k - 1] === this.grid[i][k]) {
            this.grid[i][k - 1] *= 2;
            this.score += this.grid[i][k - 1];
            this.grid[i][k] = 0;
            moved = true;
          }
        }
      }
    }
    if (moved) {
      this.addRandomTile();
      this.checkGameOver();
    }
  }

  moveRight() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
      for (let j = 2; j >= 0; j--) {
        if (this.grid[i][j] !== 0) {
          let k = j;
          while (k < 3 && this.grid[i][k + 1] === 0) {
            this.grid[i][k + 1] = this.grid[i][k];
            this.grid[i][k] = 0;
            k++;
            moved = true;
          }
          if (k < 3 && this.grid[i][k + 1] === this.grid[i][k]) {
            this.grid[i][k + 1] *= 2;
            this.score += this.grid[i][k + 1];
            this.grid[i][k] = 0;
            moved = true;
          }
        }
      }
    }
    if (moved) {
      this.addRandomTile();
      this.checkGameOver();
    }
  }

  checkGameOver() {
    let gameOver = true;
    // Check if there are any empty cells
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.grid[i][j] === 0) {
          gameOver = false;
          break;
        }
      }
      if (!gameOver) {
        break;
      }
    }
    if (gameOver) {
      // Check if there are any adjacent cells with the same value
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if ((i < 3 && this.grid[i][j] === this.grid[i + 1][j]) ||
              (j < 3 && this.grid[i][j] === this.grid[i][j + 1])) {
            gameOver = false;
            break;
          }
        }
        if (!gameOver) {
          break;
        }
      }
    }
    if (gameOver) {
      this.gameOver = true;
      alert('Game Over! Your score: ' + this.score);
    }
  }

  startAgain() {
    this.initializeGrid();
  }

  checkGameWon() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.grid[i][j] === 2048) {
          this.gameWon = true;
          alert('Congratulations! You have reached 2048!');
          return;
        }
      }
    }
  }

}