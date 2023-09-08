import Engine from "../Engine/Engine.js";
import {addNewCar, addNewCarByName, sprites} from "./data/data.js";

export class Game extends Engine {
  constructor(assets, audios) {
    super(assets, audios);

    this.canvas.width = 300;
    this.canvas.height = 400;

    this.canvasBg.width = 300;
    this.canvasBg.height = 400;

    //   GAME VARIABLES
    // this.scrollY = 0;
    // this.scrollPosition = "start";
    this.activeSprites = [...sprites(this.canvas, this.canvasBg)];

    // game state
    this.spriteTimer = 0;
    this.fuelTimer = 0;
  }

  start() {
    requestAnimationFrame((delta) => this.gameLoop(delta));

    this.controls.init(this.getSprite("Player"));
  }

  update(deltaTime) {
    this.clear();

    if (this.spriteTimer > 150) {
      this.spriteTimer = 0;
      this.activeSprites.push(...addNewCar(this.canvasBg));
    } else {
      this.spriteTimer++;
    }

    this.activeSprites?.forEach((sprite) => {
      switch (sprite?.id) {
        case "Player":
          if (sprite.fuel === 0) {
            this.isGameOver = true;
          }
          sprite.updates(this.canvas, deltaTime);
          sprite.changeGear(this.activeSprites);
          break;
        case "Background":
          sprite.update(this.canvasBg, this.deltaTime);
          break;
        case "Cars":
          if (!sprite) {
          }
          this.removeSprite("Cars");
          sprite?.updates(this.canvasBg, this.deltaTime);
          break;

        default:
          break;
      }
    });

    // Scroll
  }
  collision() {
    // REMOVE SPRITES
    const player = this.getSprite("Player");

    this.activeSprites?.forEach((sprite) => {
      if (sprite.name === "fuel") {
        if (player.collidesWith(sprite)) {
          console.log("collides");
          this.removeSpriteByObject(sprite);
          player.addFuel();
        }
      }
      if (sprite.id === "Cars" && sprite.name !== "fuel") {
        if (player.collidesWith(sprite)) {
          console.log("collides");
          this.removeSpriteByObject(sprite);
          player.reduceFuel();
        }
      }

      // if (player.collidesWith(sprite)) {
      //   this.removeSpriteByObject(sprite);
      //   player.reduceFuel();
      // }
    });
  }

  draw() {
    // Sprites
    this.drawSprites();

    // Background
    this.drawBackground();
  }

  drawSprites() {
    this.activeSprites?.forEach((sprite) => {
      if (sprite?.id !== "Background") {
        const image = this.getAssets("gamesprite")?.image;
        sprite.image = image;

        this.artist.drawSpriteSheet(this.ctx, sprite);
      }
    });
  }

  drawBackground() {
    this.activeSprites?.forEach((sprite) => {
      if (sprite?.id === "Background") {
        const image = this.getAssets(sprite?.id)?.image;
        sprite.image = image;

        this.artist.drawSprite(this.ctxBg, sprite);
      }
    });
  }

  restart() {}
}
export default Game;
