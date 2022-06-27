import modeButtonDefault from '../../assets/mode-button-default.png';
import modeButtonSelected from '../../assets/mode-button-selected.png';
import numberButtonDefault from '../../assets/number-button-default.png';
import numberButtonSelected from '../../assets/number-button-selected.png';
import numberBallDefault from '../../assets/number-ball-default.png';
import numberBallMatch from '../../assets/number-ball-match.png';
import numberIconMatch from '../../assets/number-icon-match.png';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload(): void {
        this.load.image('mode-button-default', modeButtonDefault);
        this.load.image('mode-button-selected', modeButtonSelected);
        this.load.image('number-button-default', numberButtonDefault);
        this.load.image('number-button-selected', numberButtonSelected);
        this.load.image('number-ball-default', numberBallDefault);
        this.load.image('number-ball-match', numberBallMatch);
        this.load.image('number-icon-match', numberIconMatch);
    }

    create(): void {
        this.scene.start('ModeSelect');
    }
}
