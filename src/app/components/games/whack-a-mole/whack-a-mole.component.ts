import { Component } from '@angular/core';

@Component({
  selector: 'app-whack-a-mole',
  templateUrl: './whack-a-mole.component.html',
  styleUrls: ['./whack-a-mole.component.scss'],
})
export class WhackAMoleComponent {
  score: number = 0;
  timeLeft: number = 30; // Duration of the game in seconds
  moleInterval: any;
  countdownInterval: any;
  gameStarted: boolean = false;
  count: any;

  ngOnInit(): void {
    this.startGame();
    for (let i = 0; i < 65; i++) {
      this.count.push(i);
    }
  }

  startGame(): void {
    this.score = 0;
    this.timeLeft = 30;
    this.gameStarted = true;
    this.moleInterval = setInterval(() => {
      this.popUpMole();
    }, 1000);
    this.countdownInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        clearInterval(this.moleInterval);
        clearInterval(this.countdownInterval);
        this.gameStarted = false;
      }
    }, 1000);
  }

  popUpMole(): void {
    const moleHoles = document.querySelectorAll('.mole-hole');
    moleHoles.forEach((hole: any) => {
      hole.innerHTML = ''; // Clear previous content
    });

    const randomIndex = Math.floor(Math.random() * moleHoles.length);
    const moleHole = moleHoles[randomIndex];
    const mole = document.createElement('div');
    mole.classList.add('mole');
    mole.innerHTML = '&#128060;'; // Mole emoji
    mole.addEventListener('click', () => {
      this.whackMole();
      mole.remove();
    });

    moleHole.appendChild(mole);

    setTimeout(() => {
      mole.remove(); // Remove mole after timeout
    }, 1000 + Math.random() * 2000); // Mole display duration
  }

  whackMole(): void {
    this.score += 10;
  }

  hitBomb(): void {
    this.score -= 5;
  }

  playAgain(): void {
    this.startGame();
  }
}
