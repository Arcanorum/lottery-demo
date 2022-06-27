// import numberRange from '../utils/number-range';
import countArrayMatches from '../utils/count-array-matches';
import getArrayExcept from '../utils/get-array-except';
import getRandomElement from '../utils/get-random-element';
import numberRange from '../utils/number-range';
import ModeButton from './mode-button';
import NumberIcon from './number-icon';
import prizes from './prizes';

const rollRate = 1000;

interface INumberBall {
    image: Phaser.GameObjects.Image;
    text: Phaser.GameObjects.Text;
}

export default class GameScene extends Phaser.Scene {
    playAgainButton: ModeButton;

    nextNumberBall: INumberBall;

    rolledNumbers: Array<number>;

    infoText: Phaser.GameObjects.Text;

    selectedNumbers: Array<number>;

    selectedNumberIcons: Array<NumberIcon>;

    constructor() {
        super({ key: 'Game' });
    }

    init(config: { numbers: Array<number> }) {
        this.selectedNumbers = config.numbers;
    }

    create() {
        this.rolledNumbers = [];
        this.selectedNumberIcons = [];

        const centerX = this.cameras.main.width / 2;

        this.playAgainButton = new ModeButton(
            {
                text: 'Play again',
                scene: this,
                x: centerX,
                y: 250,
                baseScale: 0.8,
                hoverScale: 0.85,
                onClick: () => {
                    if (this.selectedNumbers.length === 6) {
                        this.scene.start('ModeSelect');
                    }
                },
            },
        )
            // Should be hidden until the end the the game.
            .setVisible(false);

        this.nextNumberBall = {
            image: this.add.image(0, 0, 'number-ball-default').setOrigin(0.5),
            text: this.add.text(0, 0, '?', { fontSize: '40px' }).setOrigin(0.5),
        };
        this.add.container(centerX, 100, [this.nextNumberBall.image, this.nextNumberBall.text]);

        this.infoText = this.add.text(centerX, 450, 'Your picks', { fontSize: '40px' }).setOrigin(0.5);

        this.selectedNumbers.forEach((number, index) => {
            const spacing = 100;
            const icon = new NumberIcon(
                {
                    text: `${number}`,
                    scene: this,
                    x: 250 + (index * spacing),
                    y: this.cameras.main.height - 50,
                },
            );
            this.selectedNumberIcons.push(icon);
        });

        this.startNextNumberTimer();
    }

    startNextNumberTimer() {
        setTimeout(this.chooseNextNumber.bind(this), rollRate);
    }

    chooseNextNumber() {
        const nextNumber = getRandomElement(getArrayExcept(numberRange, this.rolledNumbers));

        this.rolledNumbers.push(nextNumber);

        this.nextNumberBall.text.setText(`${nextNumber}`);

        // Check for any matches.
        const matchIndex = this.selectedNumbers.indexOf(nextNumber);

        if (matchIndex !== -1) {
            this.selectedNumberIcons[matchIndex].match();
        }

        if (this.rolledNumbers.length < 6) {
            this.startNextNumberTimer();
        }
        else {
            this.getPrize();
        }
    }

    getPrize() {
        const matches = countArrayMatches(
            this.selectedNumbers,
            this.rolledNumbers,
        ) as (keyof typeof prizes);

        const prize = prizes[matches];

        if (prize) {
            this.infoText.setText(`${matches} matches! You won ${prize}`);
        }
        else {
            this.infoText.setText(`${matches} matches. Better luck next time.`);
        }

        this.infoText.setVisible(true);
        this.playAgainButton.setVisible(true);
    }
}
