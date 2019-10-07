import {HexagonPoints} from './../Helper/HexagonPoints'
import {utility} from './../Helper/utility'
interface xandy {x:number|0,y:number|0}
interface showPointOptional {
  color?:string,index?:number,pos?:Boolean
}

export class HexaMetarials{
    static _radius:number =1;
  static _innarRadius:number=200;
  static coloris =[];
  static defaultColor:string = '#550863'
  static  _position:{x:number,y:number} = {x:500,y:500};

  static radius(num:number){
    this._radius = num;
    return this;
  }
  static innerRadius(num:number){
    this._innarRadius = num;
    return this;
  }

  static position(obj:{x:number,y:number}){
    this._position = obj;
    return this;
  }

  static hexaPoints(num:number,radius:number):Array<xandy>{
            let pos = HexagonPoints.radius(radius)
            .numberOfPoints(num).position(this._position)
            .getPoints()
            return pos;
  }

static removeEven(arr:Array<xandy>):Array<xandy>{
  return  arr.filter((item:xandy,key)=>{
  return !utility.isEven(key)
  });
}



static removeOdd(arr:Array<xandy>):Array<xandy>{
  return arr.filter((item:xandy,key)=>
  {
    return  !utility.isOdd(key)
  });
}

static oddEvenGroup(arr:Array<xandy>){
return arr.map((item,key)=>{
  let one,two;
  one = item;
  if(key<arr.length-1){
    two =  arr[key+1]
  }else{
      two =  arr[0]
  }

  return {one,two}

})
}
static showPoint(p:p5,xy:xandy,obj:showPointOptional){
  let index = obj.index!=undefined?obj.index:null
  let color =!obj.color?'black':obj.color;
p.push()
p.fill(color)


  p.textSize(20)
  //console.log(index)
  p.textAlign(p.CENTER)
  let size = 16;
  p.textSize(size)

if(index!=null){

  p.circle(xy.x,xy.y,30)
  p.fill('#ffff')
  p.text(`${index}`,xy.x,xy.y+(size/3))
}

if(obj.pos){

 size = 13;
  p.textSize(size)

      let word = `${xy.x.toFixed(1)},${xy.y.toFixed(1)}`
        p.circle(xy.x,xy.y,p.textWidth(word)+10)
         p.fill('#ffff')
  p.text(word ,xy.x,xy.y+(size/3))
}
p.pop()

}

static showPoints(p,arr:Array<{x:number,y:number}>){

  p.push()
  p.noStroke()
  p.fill('red')

    arr.forEach((item)=>{

        this.showPos(p,{x:item.x, y:item.y})


    })
    p.pop()
}

static randomColor(p:p5,i){
  return p.color(this.defaultColor)
  // if(this.coloris[i]){
  //   return this.coloris[i]
  // }else{
  //   this.coloris[i]= p.color(p.random(255),p.random(255),p.random(255),0.8);
  //   return this.coloris[i]
  //
  // }

}

static showPos(p:p5,pos:{x:number,y:number}){

  p.push()
  p.noStroke()
  p.fill('red')
p.textAlign(p.CENTER,p.CENTER)
p.circle(pos.x,pos.y,50);
p.textSize(15)
p.fill('black')
p.text(`${Math.round(pos.x)},${Math.round(pos.y)}`, pos.x, pos.y);
    p.pop()
}
  static star(p:p5,num:number){
    let i = this.hexaPoints(num*2,this._innarRadius);
    let o = this.hexaPoints(num*2,this._radius);

let   inner = this.removeOdd(i)
let   outer = this.removeEven(o)
let mixin = this.oddEvenGroup(inner)
console.log(inner,mixin)


p.push()
p.beginShape()
for (let i = 0; i < outer.length; i++) {
  var inside = inner[i]
  var out = outer[i]


p.vertex(inside.x,inside.y)
p.vertex(out.x,out.y)


}
p.vertex( inner[0].x, inner[0].y)
p.vertex(outer[0].x,outer[0].y)

p.endShape()
p.pop()
  }

  drawArrow(p:p5,base, vec, myColor) {
    p.push();
      p.stroke(myColor);
      p.strokeWeight(3);
      p.fill(myColor);
      p.translate(base.x, base.y);
      p.line(0, 0, vec.x, vec.y);
      p.rotate(vec.heading());
    let arrowSize = 7;
      p.translate(vec.mag() - arrowSize, 0);
      p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
      p.pop();
  }

  static starRouded(p:p5,num:number,roundType:string ='inside'){
        var mixin,arr,inner,outer;

    let i = this.hexaPoints(num*2,this._innarRadius);
    let o = this.hexaPoints(num*2,this._radius);

if(roundType ==='inside'){
  inner = this.removeOdd(i)
 outer = this.removeEven(o)

}else if(roundType ==='outside'){
  inner = this.removeEven(i)
 outer = this.removeOdd(o)
}


if(roundType ==='inside'){
mixin = this.oddEvenGroup(inner)
arr = outer;
}else if(roundType ==='outside'){
  mixin = this.oddEvenGroup(outer)
  arr = inner;
}


//this.showPoints(p,outer)
//this.showPoints(p, inner)


p.strokeWeight(2)

for (let i = 0; i < arr.length; i++) {
let  randomColor = this.randomColor(p,i)
p.fill(randomColor)
  p.beginShape()
  p.curveVertex(arr[i].x, arr[i].y);
    p.curveVertex(arr[i].x, arr[i].y);
    p.curveVertex(mixin[i].one.x, mixin[i].one.y);
      p.curveVertex(mixin[i].two.x, mixin[i].two.y);
  p.curveVertex(arr[i].x, arr[i].y);
    p.curveVertex(arr[i].x, arr[i].y);
    p.endShape()
}



//p.quadraticVertex(100, 100, 200, 100);





//p.quadraticVertex(20, 80, 80, 80);





  }


}
