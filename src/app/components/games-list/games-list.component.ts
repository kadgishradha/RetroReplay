import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent {

  constructor(private router: Router){
  }
  
  cards: { imageUrl: string; description: string; cardId: number }[] = [
    {
      imageUrl:
        'https://img.gamepix.com/games/tic-tac-toe-variant/cover/tic-tac-toe-variant.png?width=600&height=340&fit=cover&quality=90',
      description:
        'Tic Tac Toe : A classic game played on a 3x3 grid where two players take turns marking spaces with their respective symbols (X or O). The first player to get three of their symbols in a row, column, or diagonal wins.',
        cardId: 1
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d64bf064-8860-4f6e-bdde-a53d8e107bad.__CR0,0,970,300_PT0_SX970_V1___.jpg',
      description: 'Connect Four: Game where players drop colored discs into a grid, aiming to connect four in a row vertically, horizontally, or diagonally. Simple rules, challenging gameplay, suitable for all ages.',
      cardId: 2
    },
    {
      imageUrl: 'https://cdn-0001.qstv.on.epicgames.com/RIAsEdfTPDlIxuUvBC/image/landscape_comp.jpeg',
      description: '2048 is a captivating puzzle game where players slide numbered tiles on a grid to merge them to achieve the elusive 2048 tile. With each move, the challenge intensifies, and success hinges on careful planning to avoid gridlock.',
      cardId: 3
    },
    {
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/9b/ee/66/9bee66fc-620c-e9e7-d654-2a098dd198dd/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
      description: ' A word-guessing game where one player thinks of a word and the other player tries to guess it by suggesting letters within a certain number of attempts.',
      cardId: 4
    },
    {
      imageUrl: 'https://a.silvergames.com/screenshots/whack-a-mole/1_menu.jpg',
      description: 'A game where players must click on randomly appearing moles to earn points. The moles appear and disappear at random intervals and players must click on them to win.',
      cardId: 5
    },
    {
      imageUrl: 'https://www.calculators.org/graphics/memory-games.png',
      description: 'Memory game: Test your recall by flipping over pairs of cards to find matching images, challenging your memory and concentration skills in a fun and engaging way.',
      cardId: 6
    },
  ];

  play(card: { imageUrl: string; description: string; cardId: number }) {
    if(card.cardId === 1){
      this.router.navigate(['/tic-tac-toe']);
    }
    else if(card.cardId === 2){
      this.router.navigate(['/connect-four']);
    }
    else if(card.cardId === 3){
      this.router.navigate(['/game-2048']);
    }
    else if(card.cardId === 4){
      this.router.navigate(['/hangman']);
    }
    else if(card.cardId === 5){
      this.router.navigate(['/mole']);
    }
    else{
      this.router.navigate(['/memory']);
    }
  }
}
