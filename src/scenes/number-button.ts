export default class NumberButton extends Phaser.GameObjects.Container {
    image: Phaser.GameObjects.Image;

    constructor(
        config:
        {
            text: string;
            scene: Phaser.Scene;
            x: number;
            y: number;
            baseScale?: number;
            hoverScale?: number;
            onClick: () => void;
        },
    ) {
        super(config.scene, config.x, config.y);

        const baseScale = config.baseScale || 1;
        const hoverScale = config.hoverScale || 1.05;

        this.setScale(baseScale);

        this.image = config.scene.add.image(0, 0, 'number-button-default')
            .setOrigin(0.5)
            .setScale(0.6)
            .setInteractive();

        this.image.on('pointerover', () => {
            this.setScale(hoverScale);
        });

        this.image.on('pointerout', () => {
            this.setScale(baseScale);
        });

        this.image.on('pointerdown', config.onClick);

        const text = config.scene.add.text(0, 0, config.text, { fontSize: '40px' })
            .setOrigin(0.5);

        this.add([this.image, text]);

        config.scene.add.existing(this);
    }

    select() {
        this.image.setTexture('number-button-selected');
    }

    deselect() {
        this.image.setTexture('number-button-default');
    }
}
