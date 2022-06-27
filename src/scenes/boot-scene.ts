export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload(): void {
        this.load.image('mode-button-default', '../assets/mode-button-default.png');
        this.load.image('mode-button-selected', '../assets/mode-button-selected.png');
        this.load.image('number-button-default', '../assets/number-button-default.png');
        this.load.image('number-button-selected', '../assets/number-button-selected.png');
        this.load.image('number-ball-default', '../assets/number-ball-default.png');
        this.load.image('number-ball-match', '../assets/number-ball-match.png');
        this.load.image('number-icon-match', '../assets/number-icon-match.png');
    }

    create(): void {
        this.scene.start('ModeSelect');
    }
}
