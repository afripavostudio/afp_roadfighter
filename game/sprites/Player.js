import Sprite from "../../Engine/Sprite.js";

export class Player extends Sprite {
  constructor(props) {
    super(props);

    //    this.artist = new Artist();
    // this.behaviors = new Behaviour();
  }

  updates(canvas, deltaTime) {
    this.counter++;

    this.x += this.velocityX * deltaTime;
    this.y += this.velocityY * deltaTime;

    if (!this.landed) {
      this.applyGravity(deltaTime);
    }
    this.checkGround(canvas);
    this.gameBounds(canvas);
    this.checkFuel();
    this.updateFuelUI();
    // this.behaviors.applyGravity(deltaTime);

    return "YES";
  }

  draw(ctx) {
    this.artist.drawSpriteSheet(ctx, this);
  }
}
