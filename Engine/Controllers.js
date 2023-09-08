class Controllers {
  constructor() {
    this.deltaTime = undefined;
  }
  init(sprite, deltaTime) {
    this.keyUp(sprite, deltaTime);
    this.keyDown(sprite, deltaTime);
    this.mobileControls(sprite, deltaTime);
  }

  updateFrames(deltaTime) {
    this.deltaTime = deltaTime;
  }

  keyDown(sprite) {
    // Event listener for jump button
    document.addEventListener("keydown", function (event) {
      const key = event.code;
      const target = event.target;

      switch (key) {
        case "ArrowLeft":
        case "KeyA":
          sprite.move("left");
          break;
        case "ArrowRight":
        case "KeyD":
          sprite.move("right");
          break;
        case "ArrowUp":
        case "KeyW":
          // sprite.jump();
          break;
        case "KeyZ":
          sprite.gearDown();
          // sprite.revCount();
          // sprite.speedCount();
          break;
        case "KeyX":
          sprite.gearUp();
          // sprite.revCount();
          // sprite.speedCount();
          break;

        default:
          break;
      }
    });
  }

  mobileControls(sprite) {
    const canvas = document.getElementById("arena");

    document
      .querySelector(".gear-lever")
      .addEventListener("pointerdown", function (event) {
        const key = event.target;

        switch (key.dataset.id) {
          case "gear_up":
            sprite.gearUp();
            break;

          case "gear_down":
            sprite.gearDown();
            break;

          default:
            break;
        }
      });

    canvas.addEventListener("pointerdown", function (event) {
      if (event.offsetX < canvas.width / 2) {
        sprite.move("left");
      } else if (event.offsetX > canvas.width / 2) {
        sprite.move("right");
      }
      // const key = event.target;
    });

    canvas.addEventListener("pointerup", function (event) {
      if (event.offsetX < canvas.width / 2) {
        sprite.stop("left");
      } else if (event.offsetX > canvas.width / 2) {
        sprite.stop("right");
      }
      // const key = event.target;
    });
  }

  // touchTurning(sprite, key) {
  //   switch (key) {
  //     case "KeyA":
  //       sprite.move("left");
  //       break;
  //     case "ArrowRight":
  //     case "KeyD":
  //       sprite.move("right");
  //       break;

  //     default:
  //       break;
  //   }
  // }
  // touchEnd(sprite, key) {
  //   switch (key) {
  //     case "KeyA":
  //       sprite.stop();
  //       break;
  //     case "ArrowRight":
  //     case "KeyD":
  //       sprite.stop();
  //       break;

  //     default:
  //       break;
  //   }
  // }

  keyUp(sprite) {
    // Event listener for jump button
    document.addEventListener("keyup", function (event) {
      const key = event.code;

      switch (key) {
        case "ArrowLeft":
        case "KeyA":
          sprite.stop();
          break;
        case "ArrowRight":
        case "KeyD":
          sprite.stop();
          break;
        case "ArrowUp":
        case "KeyW":
          break;

        default:
          break;
      }
    });
  }
}
export default Controllers;
