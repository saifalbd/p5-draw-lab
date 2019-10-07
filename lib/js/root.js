export class Root {
  constructor() {
    this._canvas = canvas;
  }

  static setCanvas(canvas) {
    this.constructor._canvas = canvas;
    return this;
  }

  static getCanvas() {
    try {
      if (!this._canvas) {
        throw `you can't set any canvas`;
      }
    } catch (e) {
      console.error(e);
      return null;
    }

    return this.constructor._canvas;
  }

  static setBg(background) {
    this.constructor._canvas.backgroundColor = background;
    return this;
  }

  static getBg() {
    return this.constructor._canvas.backgroundColor;
  }

  static getWidth() {
    return this.constructor._canvas.width;
  }

  static setWidth(width) {
    this.constructor._canvas.width = width;
    return this;
  }

  static getHeight() {
    return this.constructor._canvas.height;
  }

  static setHeight(height) {
    this.constructor._canvas.height = height;
    return this;
  }

  static getCenterX() {
    return this.constructor.getWidth() / 2;
  }

  static getCenterY() {
    return this.constructor.getHeight() / 2;
  }

  static getAngeEndPoints(ange, radius) {
    let x = y = 0;
    return {
      x,
      y
    };
  }

  static mouseChange(callback) {
    this.constructor._canvas.addEventListener('mousemove', event => {
      let x, y;
      x = event.offsetX;
      y = event.offsetY;
    });
  }

}
console.log(Root);