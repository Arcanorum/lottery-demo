import BootScene from './scenes/boot-scene';
import ModeSelectScene from './scenes/mode-select-scene';

const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Webpack-Boilerplate',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '2.0',
  width: 800,
  height: 600,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [BootScene, ModeSelectScene],
};

export default GameConfig;
