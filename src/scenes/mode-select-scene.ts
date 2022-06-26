import getUniqueRandomElements from '../utils/get-unique-random-elements';
import ModeButton from './mode-button';
import Modes from '../utils/modes';
import numberRange from '../utils/number-range';

export default class ModeSelectScene extends Phaser.Scene {
    selectedMode: Modes;

    manualPickButton: ModeButton;

    luckyDipButton: ModeButton;

    startButton: ModeButton;

    constructor() {
        super({ key: 'ModeSelect' });
    }

    create() {
        const centerX = this.cameras.main.width / 2;

        this.manualPickButton = new ModeButton({
            text: 'Manual pick',
            scene: this,
            x: centerX,
            y: 100,
            onClick: () => {
                this.selectedMode = Modes.manualPick;
                this.manualPickButton.select();
                this.luckyDipButton.deselect();
                this.startButton.setAlpha(1);
            },
        });

        this.luckyDipButton = new ModeButton({
            text: 'Lucky dip',
            scene: this,
            x: centerX,
            y: 250,
            onClick: () => {
                this.selectedMode = Modes.luckyDip;
                this.luckyDipButton.select();
                this.manualPickButton.deselect();
                this.startButton.setAlpha(1);
            },
        });

        this.startButton = new ModeButton({
            text: 'Start',
            scene: this,
            x: centerX,
            y: 500,
            onClick: () => {
                if (this.selectedMode === Modes.manualPick) {
                    this.scene.start('NumberSelect');
                } else if (this.selectedMode === Modes.luckyDip) {
                    this.scene.start('Game', {
                        // Pick some random numbers for lucky dip mode.
                        numbers: getUniqueRandomElements(numberRange, 6),
                    });
                }
            },
        });

        this.startButton.setAlpha(0.5);
    }
}
