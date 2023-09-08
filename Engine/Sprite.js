import Artist from "./Artist.js";
import Behaviors from "./Behaviors.js";

export default class Sprite extends Behaviors {
  constructor({
    id,
    name,
    image,
    sX,
    sY,
    sWidth,
    sHeight,
    x,
    y,
    width,
    height,
    isJumping,
    speedX,
    speedY,
    velocityY,
    velocityX,
    accelerateY,
    gravity,
    isLanded,
    isFlipping,
    jumpStrength,
    flipStrength,
    onWall,
    cells,
    currentAnim,
    currentFrame,
    isMoving,
    anims,
    gearNumber,
    fuel,
    distance,
  }) {
    super();
    this.id = id || "Player";
    this.name = name || undefined;
    this.image = image || undefined;
    this.sX = sX;
    this.sY = sY;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isJumping = isJumping || false;
    this.speedX = speedX || 250;
    this.speedY = speedY || 150;
    this.velocityY = velocityY || 0;
    this.velocityX = velocityX || 0;
    this.accelerateY = accelerateY || 0;
    this.gravity = gravity || 1500;
    this.isLanded = isLanded || true;
    this.isFlipping = isFlipping;
    this.jumpStrength = jumpStrength || -700;
    this.flipStrength = flipStrength || -100;
    this.onWall = onWall || 1;
    this.cells = cells || 4;
    this.gearNumber = gearNumber || 1;
    this.fuel = fuel || 100;
    this.distance = distance || 0;
    this.isOnWall = undefined;
    this.currentAnim = currentAnim || "idle";
    this.currentFrame = currentFrame || 6;
    this.isMoving = isMoving || false;
    this.anims = anims || [];

    //   timers
    this.isReadyToShoot = false;
    this.counter = 0;
  }
}
