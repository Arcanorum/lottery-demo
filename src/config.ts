import BootScene from './scenes/boot-scene';
import GameScene from './scenes/game-scene';
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
    scene: [
        BootScene,
        ModeSelectScene,
        NumberSelectScene,
        GameScene,
    ],
};

export default GameConfig;
