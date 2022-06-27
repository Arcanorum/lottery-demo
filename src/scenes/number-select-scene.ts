import numberRange from '../utils/number-range';
import ModeButton from './mode-button';
import NumberButton from './number-button';

export default class NumberSelectScene extends Phaser.Scene {
    infoText: Phaser.GameObjects.Text;

    numberButtons: Array<NumberButton> = [];

    selectedNumbers: Array<number> = [];

    playButton: ModeButton;

    constructor() {
        super({ key: 'NumberSelect' });
    }

    create() {
        const centerX = this.cameras.main.width / 2;

        this.infoText = this.add.text(centerX, 50, 'Select your picks').setOrigin(0.5);

        this.populateNumberGrid();

        this.playButton = new ModeButton(
            {
                text: 'Play',
                scene: this,
                x: this.cameras.main.width - 100,
                y: this.cameras.main.height - 50,
                baseScale: 0.5,
                hoverScale: 0.55,
                onClick: () => {
                    if (this.selectedNumbers.length === 6) {
                        this.scene.start('Game', { numbers: this.selectedNumbers });
                    }
                },
            },
        ).setAlpha(0.5);
    }

    populateNumberGrid() {
        const itemsPerRow = 10;
        const spacing = 80;

        numberRange.forEach((number) => {
            const row = Math.floor((number - 1) / itemsPerRow);
            const col = ((number - 1) % itemsPerRow);

            const button = new NumberButton({
                text: `${number}`,
                scene: this,
                x: 50 + (col * spacing),
                y: 100 + (row * spacing),
                onClick: () => {
                    // Deselect this number if it is already selected.
                    if (this.selectedNumbers.includes(number)) {
                        button.deselect();
                        this.deselectNumber(number);
                    }
                    // Prevent more than 6 numbers being selected.
                    else if (this.selectedNumbers.length < 6) {
                        button.select();
                        this.selectNumber(number);
                    }
                },
            });
            this.numberButtons.push(button);
        });
    }

    selectNumber(number: number) {
        this.selectedNumbers.push(number);

        // Make the play button look interactive when enough numbers have been selected.
        if (this.selectedNumbers.length === 6) {
            this.playButton.setAlpha(1);
        }
    }

    deselectNumber(number: number) {
        this.selectedNumbers = this.selectedNumbers.filter((num) => num !== number);

        this.playButton.setAlpha(0.5);
    }
}
