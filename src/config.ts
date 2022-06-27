import BootScene from './scenes/boot-scene';
import ModeSelectScene from './scenes/mode-select-scene';
import NumberSelectScene from './scenes/number-select-scene';

const GameConfig: Phaser.Types.Core.GameConfig = {
    width: 1000,
    height: 600,
    backgroundColor: 0x3a404d,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [BootScene, ModeSelectScene, NumberSelectScene],
};

export default GameConfig;
