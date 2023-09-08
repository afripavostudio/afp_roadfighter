import Artist from "./Artist.js";
import Controllers from "./Controllers.js";

class Engine {
  constructor(assets, audios) {
    this.timerID = undefined;

    this.gameAssets = assets;
    this.audioAssets = audios;

    this.canvas = document.getElementById("arena");
    this.ctx = this.canvas.getContext("2d");

    this.canvasBg = document.getElementById("arenaBackground");
    this.ctxBg = this.canvasBg.getContext("2d");

    this.canvasContainer = document.querySelector(".canvas-container");

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.bgWidth = this.canvas.width;
    this.bgHeight = this.canvas.height;

    this.artist = new Artist();
    this.controls = new Controllers();

    this.isGameOver = false;

    this.deltaTime = 0;
    this.counter = 0;
    this.timer = 0;
    this.lastAnimationFrame = 0;
  }

  calcDelta(delta) {
    const _deltaTime = (delta - this.lastAnimationFrame) / 1000;

    this.deltaTime = _deltaTime;
    this.counter++;
    this.timer++;

    this.lastAnimationFrame = delta;
  }

  gameLoop(delta) {
    this.calcDelta(delta);

    if (this.isGameOver) {
      this.restart();
      cancelAnimationFrame(this.timerID);
      return;
    }

    this.clear();

    this.update(this.deltaTime);

    this.collision();

    this.draw();

    this.timerID = requestAnimationFrame((delta) => this.gameLoop(delta));
  }

  getAssets(name) {
    return this.gameAssets.filter((asset) => asset?.name === name)?.[0];
  }

  getSprite(name) {
    return this.activeSprites?.filter((sprite) => sprite?.id === name)?.[0];
  }

  removeSprite(name) {
    this.activeSprites.forEach((sprite, i) => {
      if (sprite.id === name) {
        if (sprite.y > this.canvasBg.height + 20) {
          this.activeSprites?.splice(i, 1);
        }
      }
    });
  }
  removeSpriteByObject(twinSprite) {
    this.activeSprites.forEach((sprite, i) => {
      console.log(sprite === twinSprite);
      if (sprite === twinSprite) {
        this.activeSprites?.splice(i, 1);
      }
    });
  }

  clear() {
    this.ctxBg.clearRect(0, 0, this.canvasBg.width, this.canvasBg.height);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
export default Engine;
