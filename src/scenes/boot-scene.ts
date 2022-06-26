export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload(): void {
        this.load.image('mode-button-default', '../assets/mode-button-default.png');
        this.load.image('mode-button-selected', '../assets/mode-button-selected.png');
    }

    create(): void {
        this.scene.start('ModeSelect');
    }
}
