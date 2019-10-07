class Magnify {
    constructor(arg) {
        this.radius = 100;
        this.bgColor = "#ffff";
        this.parentDom = arg.parentDom;
        this.radius = arg.radius;
        this.imgDom = arg.imgDom;
        this.bgColor = arg.bgColor;
        this.canvas = arg.canvas;
    }
    get context() {
        return this.canvas.getContext('2d');
    }
    get width() { return this.canvas.width; }
    set width(num) { this.canvas.width = num; }
    get height() { return this.canvas.height; }
    set height(num) { this.canvas.height = num; }
    get circleX() {
        if (!this._circleX) {
            this._circleX = this.width / 2;
        }
        return this._circleX;
    }
    get circleY() {
        if (!this._circleY) {
            this._circleY = this.height / 2;
        }
        return this._circleY;
    }
    set circleX(num) {
        this._circleX = num;
    }
    set circleY(num) {
        this._circleY = num;
    }
    fillArea() {
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(0, 0, this.width, this.height);
        return this;
    }
    makeImg() {
        console.log(this.imgDom);
        let moveX = this.width / 2 - this.imgDom.width / 2;
        let moveY = this.height / 2 - this.imgDom.height / 2;
        this.context.drawImage(this.imgDom, moveX, moveY, this.imgDom.width * 1.5, this.imgDom.height * 1.5);
        return this;
    }
    makeCircle() {
        const radius = this.radius;
        const context = this.context;
        let x = this.circleX;
        let y = this.circleY;
        context.save();
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, true);
        context.clip();
        context.clearRect(x - radius, y - radius, radius * 2, radius * 2);
        context.restore();
        return this;
    }
    run() {
        this.fillArea().makeImg().makeCircle();
        return this;
    }
}
const parentDom = document.getElementById('imageBox');
const imgDom = document.getElementById('scream');
const canvas = document.getElementById('canvas');
const radius = 125;
const bgColor = '#ffff';
window.onload = function () {
    let meg = new Magnify({
        parentDom,
        imgDom,
        canvas,
        radius,
        bgColor
    });
    meg.width = parentDom.offsetWidth;
    meg.height = parentDom.offsetHeight;
    parentDom.addEventListener('mousemove', (event) => {
        meg.circleX = event.layerX;
        meg.circleY = event.layerY;
        meg.run();
    });
};
