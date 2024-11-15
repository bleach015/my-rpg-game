import { useEffect } from "react";
import Phaser from "phaser";

const Game = () => {
    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { x: 300, y: 300 },
                    debug: false,
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload(this: Phaser.Scene) {
            // Load assets here
            // this.load.setBaseURL("https://cdn.phaserfiles.com/v385");
            // this.load.image("sky", "assets/skies/space3.png");
            // this.load.image("logo", "assets/sprites/phaser3-logo.png");
            // this.load.image("red", "assets/particles/red.png");
            this.load.setBaseURL("http://localhost:8888");
            this.load.image(
                "background-day",
                "flappy-bird-assets/sprites/background-day.png"
            );
        }

        function create(this: Phaser.Scene) {
            // Initialize game objects here
            this.add.image(400, 300, "background-day");
            // const particles = this.add.particles(undefined, undefined, "red", {
            //     speed: 100,
            //     scale: { start: 1, end: 0 },
            //     blendMode: "ADD",
            // });
            // const logo = this.physics.add.image(400, 300, "logo");
            // logo.setVelocity(100, 200);
            // logo.setBounce(1, 1);
            // logo.setCollideWorldBounds(true);
            // particles.startFollow(logo);
        }

        function update(this: Phaser.Scene) {
            // Game logic here
        }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="phaser-game" />;
};

export default Game;
