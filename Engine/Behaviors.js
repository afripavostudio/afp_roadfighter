class Behaviors {
  constructor() {}
  move(direction) {
    if (direction === "right") {
      if (this.isOnWall !== "right") {
        this.velocityX = this.speedX;
        this.directionRadian = direction;
      }
    }
    if (direction === "left") {
      if (this.isOnWall !== "left") {
        this.velocityX = -this.speedX;
        this.directionRadian = direction;
      }
    }
  }

  jump(deltaTime) {
    if (!this.isJumping) {
      this.velocityY = this.jumpStrength;

      this.isLanded = false;
      this.isJumping = true;
    }
  }

  loadBullets(shoot) {
    if (this.counter > 25) {
      this.isReadyToShoot = true;
      this.counter = 0;
    }

    if (this.isReadyToShoot) {
      shoot();
      this.isReadyToShoot = false;
    }
  }

  collidesWith(sprite) {
    const playerBottom = this.y + this.height;
    const playerLeft = this.x;
    const playerRight = this.x + this.width;
    const playerTop = this.y;

    const spriteTop = sprite.y;
    const spriteRight = sprite.x + sprite.width;
    const spriteBottom = sprite.y + sprite.height;
    const spriteLeft = sprite.x;

    if (
      playerLeft < spriteRight &&
      playerRight > spriteLeft &&
      playerTop < spriteBottom &&
      playerBottom > spriteTop
    ) {
      return true;
    } else {
      return false;
    }
  }

  applyGravity(deltaTime) {
    this.velocityY += this.gravity * deltaTime;
  }

  checkPlatform(platform) {
    const playerBottom = this.y + this.height;
    const playerLeft = this.x;
    const playerRight = this.x + this.width;
    const playerTop = this.y;

    const platformTop = platform.y;
    const platformRight = platform.x + platform.width;
    const platformBottom = platform.y + platform.height;
    const platformLeft = platform.x;

    if (
      playerBottom + 10 > platformTop && // Player's bottom is below platform's top
      playerTop + 10 < platformBottom && // Player's top is above platform's bottom
      playerRight - 10 > platformLeft && // Player's right is to the right of platform's left
      playerLeft + 10 < platformRight && // Player's left is to the left of platform's right
      this.velocityY >= 0
    ) {
      // Prevent the player from falling through the platform
      this.y = platformTop - this.height;
      this.velocityY = 0;
      this.isJumping = false;
      this.isLanded = true;
      this.landed = true;
    }
  }

  acceleratingY(y) {
    this.accelerateY = y;
  }

  acceleratingX(x) {
    this.accelerateX = x;
  }

  gearUp() {
    if (this.gearNumber <= 4) {
      this.gearNumber++;
    }
  }
  gearDown() {
    if (this.gearNumber > 1) {
      this.gearNumber--;
    }
  }

  updateFuelUI() {
    const fuelGauge = document.querySelectorAll(".fuel-level");

    // console.log(this.fuel);
    fuelGauge.forEach((gauge, i) => {
      if (this.fuel < i + 1) {
        gauge.classList.add("hide-it");
      } else {
        gauge.classList.remove("hide-it");
      }
    });
  }

  reduceFuel() {
    this.fuel--;
    this.updateFuelUI();
  }
  addFuel() {
    this.fuel++;
    this.updateFuelUI();
  }

  checkFuel() {
    let distancePerCount = 100 - 1 * this.gearNumber;
    if (this.counter > 10) {
      if (this.distance > distancePerCount) {
        this.reduceFuel();
        this.distance = 0;
      } else {
        this.distance++;
      }

      this.counter = 0;
    }
  }

  changeGear(sprites) {
    sprites.forEach((sprite) => {
      if (sprite.id === "Background" || sprite.id === "Cars") {
        sprite.accelerateY = this.gearNumber;
        this.revCount();
        this.speedCount();
      }
    });
  }

  updateNeedle(needle, value, max) {
    const angle = (value / max) * 180; // Calculate the rotation angle
    needle.style.transform = `rotate(${angle - 85}deg)`; // Rotate the needle
  }

  revCount() {
    const revNeedle = document.getElementById("revNeedle");
    const maxRev = 4000;
    const revMap = {
      1: 500,
      2: 1000,
      3: 1500,
      4: 2000,
    };
    this.updateNeedle(revNeedle, revMap[this.gearNumber], maxRev);
  }

  speedCount() {
    const speedNeedle = document.getElementById("speedNeedle");
    const maxSpeed = 220;
    const speedMap = {
      1: 25,
      2: 60,
      3: 80,
      4: 125,
    };
    this.updateNeedle(speedNeedle, speedMap[this.gearNumber], maxSpeed);
  }

  checkGround(canvas) {
    const playerBottom = this.y + this.height;

    if (playerBottom + 10 > canvas.height) {
      // Prevent the player from falling through the platform
      this.y = canvas.height - this.height;
      this.velocityY = 0;
      this.isJumping = false;
      this.isLanded = true;
    }
  }

  gameBounds(canvas) {
    const playerBottom = this.y + this.height;
    const playerLeft = this.x;
    const playerRight = this.x + this.width;
    const playerTop = this.y;

    if (playerLeft <= 10) {
      // Prevent the player from falling through the platform
      this.velocityX = 0;
      this.isOnWall = "left";
    } else if (playerRight > canvas.width) {
      // Prevent the player from falling through the platform
      this.velocityX = 0;
      this.isOnWall = "right";
      // this.x = canvas.width - this.width - 10;
    } else {
      this.isOnWall = undefined;
    }
  }

  stop() {
    this.velocityX = 0;
    this.velocityY = 0;
  }
}
export default Behaviors;
