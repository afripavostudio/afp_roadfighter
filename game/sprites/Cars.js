import Sprite from "../../Engine/Sprite.js";

export class Cars extends Sprite {
  constructor(props) {
    super(props);

    //    this.artist = new Artist();
    // this.behaviors = new Behaviour();
  }

  updates(canvas, deltaTime) {
    this.velocityY = this.speedY;
    // this.x += this.velocityX * deltaTime;

    // if (this.name === "fuel-car") {
    //   // this.y += this.velocityY * this.accelerateY * deltaTime;
    //   this.velocityY = 0
    //   this.y = canvas.y + 200;
    // } else {
    // }
    this.y += this.velocityY * this.accelerateY * deltaTime;

    return "YES";
  }

  draw(ctx) {
    this.artist.drawSpriteSheet(ctx, this);
  }
}
