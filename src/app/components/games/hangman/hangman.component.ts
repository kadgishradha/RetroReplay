import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent {
  word!: string;
  hiddenWord!: string[];
  guessedLetters: Set<string> = new Set();
  incorrectGuesses: number = 0;
  maxIncorrectGuesses: number = 6;
  hangmanParts: number[] = [1, 2, 3, 4, 5, 6];
  gameOver: boolean = false;
  gameWon: boolean = false;
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  words: string[] = [
    'angular',
    'javascript',
    'typescript',
    'html',
    'css',
    'react',
    'vue',
    'tailwind css',
    'c++',
    'python',
    'java',
    'kotlin',
    'swift',
    'ruby',
    'php',
    'ngrx',
    'rxjs',
    'redux',
  ];

  constructor() {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.word = this.getRandomWord();
    this.hiddenWord = Array(this.word.length).fill('_');
    this.guessedLetters.clear();
    this.incorrectGuesses = 0;
    this.gameOver = false;
    this.gameWon = false;
  }

  getRandomWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  guessLetter(letter: string): void {
    if (!this.gameOver && !this.guessedLetters.has(letter)) {
      this.guessedLetters.add(letter);
      if (this.word.includes(letter)) {
        this.word.split('').forEach((char, index) => {
          if (char === letter) {
            this.hiddenWord[index] = letter;
          }
        });
        if (!this.hiddenWord.includes('_')) {
          this.gameOver = true;
          this.gameWon = true;
        }
      } else {
        this.incorrectGuesses++;
        if (this.incorrectGuesses >= this.maxIncorrectGuesses) {
          this.gameOver = true;
        }
      }
    }
  }

  playAgain(): void {
    this.startGame();
  }

  displayGuessedLetters(): string {
    return this.guessedLetters.size > 0
      ? Array.from(this.guessedLetters).join(', ')
      : 'None';
  }
}
