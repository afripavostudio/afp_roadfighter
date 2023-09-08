class ImgLoader {
  constructor() {
    this.gameAssets = [];
  }

  loadImages(list) {
    list.forEach(({name, url}) => this.loadImage(name, url));

    return this;
  }

  loadImage(name, url) {
    let image = new Image();
    image.src = url;

    image.onload = () => {
      this.gameAssets.push({
        name,
        image,
      });
    };
  }
}

export default ImgLoader;
