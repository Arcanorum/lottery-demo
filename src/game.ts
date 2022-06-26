import 'phaser';
import GameConfig from './config';

export default class Game extends Phaser.Game { }

window.addEventListener('load', () => {
    // eslint-disable-next-line no-new
    new Game(GameConfig);
});
