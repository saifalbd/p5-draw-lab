interface xandy {x:number|0,y:number|0}
interface hexaPointsWithAngel {
  x:number|0,
  y:number|0,
  angel:number|0,
}

export class HexagonPoints{

private  static _radius:number;
private static _innarRadius:number;
private   static _numberOfPoints:number;
private   static _position:{x:number,y:number};
private static _startingAngel:number|0 =0;


private static setDefault(){
  this._radius = null;
  this._innarRadius = null;
  this._numberOfPoints = null;
  this._position = {x:null,y:null}
}


static radius(num:number){
  this._radius = num;
  return this;
}
static numberOfPoints(num:number){
  this._numberOfPoints = num;
  return this;
}
static position(obj:{x:number,y:number}){
  this._position = obj;
  return this;
}
static innerRadius(num:number){
  this._innarRadius = num;
  return this;
}

private static makeHexagon(radius:number):Array<hexaPointsWithAngel>{

  let TWO_PI = 2*Math.PI;

  let x = this._position.x;
  let y = this._position.y;
  let angels = []
  let angle = ( TWO_PI / this._numberOfPoints);
  let startFrom = this._startingAngel;
var angelIs = 0;
  for (let a = 0; a < this._numberOfPoints; a++) {
    angelIs =(angle*a)+startFrom;
    let sx = x + Math.cos(angelIs) * radius;
    let sy = y + Math.sin(angelIs) * radius;
    let an = Math.atan2(sx, sy)

//    console.log('an',an.toFixed(5))
angels.push({x:sx,y:sy,angel:an});
  }
//   for (let a = startFrom; a < TWO_PI+startFrom; a += angle) {
//     let sx = x + Math.cos(a) * radius;
//     let sy = y + Math.sin(a) * radius;
//     let an = Math.atan2(sx, sy)
// //    console.log('an',an.toFixed(5))
// angels.push({x:sx,y:sy,angel:an});
//   }
console.log('an',TWO_PI+startFrom)
  return angels;
}
static startFrom(num:number){
  this._startingAngel = num;
  return this;
}

static indecator(p:p5,arr:Array<xandy>){
  p.push()
  p.noStroke()
  p.fill('black')
  arr.forEach(item=>{
    p.circle(item.x,item.y,20)
  })

  p.pop()
}

public static getPoints():Array<hexaPointsWithAngel>{
  let hexagon = this.makeHexagon(this._radius);
  this.setDefault()
  return hexagon;

}

public static getPointsWithInner(){
  let outer = this.makeHexagon(this._radius);
  let inner = this.makeHexagon(this._innarRadius);
  let length = outer.length;
  this.setDefault()
return { outer,inner,length};
}


}
