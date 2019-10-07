var Magnify = (function () {
    function Magnify(arg) {
        this.radius = 100;
        this.bgColor = "#ffff";
        this.parentDom = arg.parentDom;
        this.radius = arg.radius;
        this.imgDom = arg.imgDom;
        this.bgColor = arg.bgColor;
        this.canvas = arg.canvas;
    }
    Object.defineProperty(Magnify.prototype, "context", {
        get: function () {
            return this.canvas.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Magnify.prototype, "width", {
        get: function () { return this.canvas.width; },
        set: function (num) { this.canvas.width = num; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Magnify.prototype, "height", {
        get: function () { return this.canvas.height; },
        set: function (num) { this.canvas.height = num; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Magnify.prototype, "circleX", {
        get: function () {
            if (!this._circleX) {
                this._circleX = this.width / 2;
            }
            return this._circleX;
        },
        set: function (num) {
            this._circleX = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Magnify.prototype, "circleY", {
        get: function () {
            if (!this._circleY) {
                this._circleY = this.height / 2;
            }
            return this._circleY;
        },
        set: function (num) {
            this._circleY = num;
        },
        enumerable: true,
        configurable: true
    });
    Magnify.prototype.fillArea = function () {
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(0, 0, this.width, this.height);
        return this;
    };
    Magnify.prototype.makeImg = function () {
        console.log(this.imgDom);
        var moveX = this.width / 2 - this.imgDom.width / 2;
        var moveY = this.height / 2 - this.imgDom.height / 2;
        this.context.drawImage(this.imgDom, moveX, moveY, this.imgDom.width * 1.5, this.imgDom.height * 1.5);
        return this;
    };
    Magnify.prototype.makeCircle = function () {
        var radius = this.radius;
        var context = this.context;
        var x = this.circleX;
        var y = this.circleY;
        context.save();
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, true);
        context.clip();
        context.clearRect(x - radius, y - radius, radius * 2, radius * 2);
        context.restore();
        return this;
    };
    Magnify.prototype.run = function () {
        this.fillArea().makeImg().makeCircle();
        return this;
    };
    return Magnify;
}());
var parentDom = document.getElementById('imageBox');
var imgDom = document.getElementById('scream');
var canvas = document.getElementById('canvas');
var radius = 125;
var bgColor = '#ffff';
window.onload = function () {
    var meg = new Magnify({
        parentDom: parentDom,
        imgDom: imgDom,
        canvas: canvas,
        radius: radius,
        bgColor: bgColor
    });
    meg.width = parentDom.offsetWidth;
    meg.height = parentDom.offsetHeight;
    parentDom.addEventListener('mousemove', function (event) {
        meg.circleX = event.layerX;
        meg.circleY = event.layerY;
        meg.run();
    });
};
var Morph = (function () {
    function Morph() {
    }
    Morph.prototype.setup = function () {
        this.shapes = [];
        this.currentShape = 0;
        this.shapes.push({ points: Shapes.circle(100), color: color('#009CDF') });
        this.shapes.push({ points: Shapes.circle(150), color: color(255, 204, 0) });
        this.shapes.push({ points: Shapes.square(50), color: color(175, 100, 220) });
        this.morph = new Array();
        var highestCount = 0;
        for (var i = 0; i < this.shapes.length; i++) {
            highestCount = Math.max(highestCount, this.shapes[i].points.length);
        }
        for (var i = 0; i < highestCount; i++) {
            this.morph.push(new p5.Vector());
        }
    };
    Morph.prototype.recalc = function () {
        var totalDistance = 0;
        var points = this.shapes[this.currentShape].points;
        for (var i = 0; i < points.length; i++) {
            var v1 = points[i];
            var v2 = this.morph[i];
            v2.lerp(v1, 0.1);
            totalDistance += p5.Vector.dist(v1, v2);
        }
        if (totalDistance < 0.1) {
            this.currentShape++;
            if (this.currentShape >= this.shapes.length) {
                this.currentShape = 0;
            }
        }
    };
    Morph.prototype.draw = function () {
        this.recalc();
        var color = this.shapes[this.currentShape].color;
        var points = this.shapes[this.currentShape].points;
        translate(width / 2, height / 2);
        strokeWeight(4);
        beginShape();
        noFill();
        stroke(color);
        for (var i = 0; i < points.length; i++) {
            var v = this.morph[i];
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    };
    return Morph;
}());
var Shapes = (function () {
    function Shapes() {
    }
    Shapes.circle = function (size) {
        var points = new Array();
        for (var angle = 0; angle < 360; angle += 9) {
            var v = p5.Vector.fromAngle(radians(angle - 135));
            v.mult(size);
            points.push(v);
        }
        return points;
    };
    Shapes.square = function (size) {
        var points = new Array();
        for (var x = -size; x < size; x += 10) {
            points.push(createVector(x, -size));
        }
        for (var y = -size; y < size; y += 10) {
            points.push(createVector(size, y));
        }
        for (var x = size; x > -size; x -= 10) {
            points.push(createVector(x, size));
        }
        for (var y = size; y > -size; y -= 10) {
            points.push(createVector(-size, y));
        }
        return points;
    };
    Shapes.star = function (x, y, radius1, radius2, npoints) {
        var angle = TWO_PI / npoints;
        var halfAngle = angle / 2.0;
        var points = new Array();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x + cos(a) * radius2;
            var sy = y + sin(a) * radius2;
            points.push(createVector(sx, sy));
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            points.push(createVector(sx, sy));
        }
        return points;
    };
    return Shapes;
}());
//# sourceMappingURL=build.js.map