class Artist {
  drawRects(ctx, {x, y, width, height}) {
    ctx.fillRect(x, y, width, height);
  }
  drawRectsStroke(ctx, {x, y, width, height}) {
    ctx.strokeRect(x, y, width, height);
  }
  drawSprite(ctx, {image, x, y, width, height}) {
    ctx.drawImage(image, x, y, width, height);
  }
  drawSpriteSheet(ctx, {image, sX, sY, sWidth, sHeight, x, y, width, height}) {
    ctx.drawImage(image, sX, sY, sWidth, sHeight, x, y, width, height);
  }
}
export default Artist;
