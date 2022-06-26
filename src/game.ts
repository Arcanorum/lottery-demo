import 'phaser';
import GameConfig from './config';

export default class Game extends Phaser.Game { }

window.addEventListener('load', () => {
  const game = new Game(GameConfig);
  console.log('game:', game);
});
