import Sprite from "../../Engine/Sprite.js";

export class Background extends Sprite {
  constructor(props) {
    super(props);
  }

  update(canvasBg, deltaTime) {
    this.parallaxY(canvasBg, deltaTime);
  }

  parallaxY(canvasBg, deltaTime) {
    if (this.y > canvasBg.height) {
      this.y = -this.velocityY;
    } else {
      this.velocityY = this.speedY;

      this.y += this.velocityY * this.accelerateY * deltaTime;
    }
  }
}
