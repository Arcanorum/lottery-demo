export default class NumberIcon extends Phaser.GameObjects.Container {
    image: Phaser.GameObjects.Image;

    constructor(
        config:
        {
            text: string;
            scene: Phaser.Scene;
            x: number;
            y: number;
        },
    ) {
        super(config.scene, config.x, config.y);

        this.image = config.scene.add.image(0, 0, 'number-button-default')
            .setOrigin(0.5);

        const text = config.scene.add.text(0, 0, config.text, { fontSize: '40px' })
            .setOrigin(0.5);

        this.add([this.image, text]);

        config.scene.add.existing(this);
    }

    match() {
        this.image.setTexture('number-icon-match');
    }
}
