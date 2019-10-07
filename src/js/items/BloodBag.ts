interface xandy {
  x:number,y:number
}

export class  BloodBag {
  public area:xandy;
  public position:xandy;
  public p:p5;
  public topBottomGap:number =100;
  public borderCorner = 50;
  public innerGap = 25;


  constructor(p:p5,position:xandy,area:xandy){
    this.p = p ;
    this.position=position;
    this.area= area;
  }


get centerBag():{centerX:number,centerY:number}{
  const {x,y} = this.area;
  return {centerX:x/2,centerY:y/2}
}
translate(type:boolean){
  let left = this.position.x;
  let top =  this.position.y;
  if(type){
    this.p.translate(left,top)
  }else{
    this.p.translate(-left,-top)
  }
}
point(obj:xandy){
const {x,y} = obj;
  this.p.noStroke()
  this.p.fill('black')
  this.p.circle(x,y,20)
  this.p.noFill()
  this.p.stroke('black')


}
makeHoq(){
    this.translate(true)
  const {centerX,centerY} = this.centerBag;
  let top = -centerY+(this.topBottomGap/2);
  this.p.push()
  this.p.stroke(this.p.color('#ffff'))
  this.p.fill('#fffdd0')
this.p.circle(0,top,this.topBottomGap)
this.p.pop()
  this.translate(false)
}
makeOutSharfe(){
    const {centerX,centerY} = this.centerBag;
    let gap = this.topBottomGap;
    let corner = this.borderCorner;
    let p = this.p;
    let circleBorderDive = 2;

    let pos2 = {
      x:gap/2,
      y:-centerY+gap
    }
    let pos3 = {
      x:centerX-corner,
      y:-centerY+gap
    }
    let pos4 = {
      x:centerX,
      y:-centerY+gap
    }
    let pos5 = {
      x:centerX,
      y:-centerY+gap+corner
    }
    let pos6 = {
      x:centerX,
      y:centerY-(gap-corner)
    }

    let pos7 = {
      x:centerX,
      y:centerY
    }
    let pos8 = {
      x:centerX-corner,
      y:centerY
    }
    let pos9 = {
      x:-centerX+corner,
      y:centerY
    }
    let pos10 = {
      x:-centerX,
      y:centerY
    }
    let pos11 = {
      x:-centerX,
      y:centerY-corner
    }
    let pos12 = {
      x:-centerX,
      y:-centerY+(gap+corner)
    }
    let pos13 = {
      x:-centerX,
    y:-centerY+(gap)
    }
    let pos14 = {
      x:-centerX+corner,
    y:-centerY+(gap)
    }
    let pos15 = {
      x:-gap/2,
      y:-centerY+gap
    }
    let xoom = gap/3 ;
    let pos1 = {
      x:gap/2+xoom,
      y:-centerY+(gap/4)
    }
    let pos16 = {
      x:-gap/2-xoom,
      y:-centerY+(gap/4)
    }
    let pos17 = {
      x:0,
      y:-centerY-(gap/4)-xoom
    }


//this.point(pos1)
//this.point(pos2)
// this.point(pos3)
// this.point(pos4)
// this.point(pos5)
// this.point(pos6)
// this.point(pos7)
// this.point(pos8)
// this.point(pos9)
// this.point(pos10)
// this.point(pos11)
// this.point(pos12)
// this.point(pos13)
// this.point(pos14)
// this.point(pos15)
//this.point(pos16)
this.point(pos17)

p.strokeWeight(5)
p.push()
p.noStroke()
//p.stroke('red')
p.fill(p.color('#8B0000'))
p.beginShape();
p.vertex(pos1.x, pos1.y);
p.quadraticVertex(pos2.x, pos2.y, pos3.x, pos3.y);
p.quadraticVertex(pos4.x, pos4.y, pos5.x, pos5.y);
p.vertex(pos6.x, pos6.y);
p.quadraticVertex(pos7.x, pos7.y, pos8.x, pos8.y);
p.vertex(pos9.x, pos9.y);
p.quadraticVertex(pos10.x, pos10.y, pos11.x, pos11.y);
p.vertex(pos12.x, pos12.y);
p.quadraticVertex(pos13.x, pos13.y, pos14.x, pos14.y);

p.quadraticVertex(pos15.x, pos15.y, pos16.x, pos16.y);
p.quadraticVertex(pos17.x, pos17.y, pos1.x, pos1.y);
p.endShape();
p.pop()

}
makeInputSarpe(){
    this.translate(true)
    var {centerX,centerY} = this.centerBag;
    centerX = centerX-50;
    let left = -centerX
    let right = centerX*2;
    let top = -centerY;
    let bottom = centerY;
    let borderW = 5;
    this.p.strokeWeight(borderW)
    this.p.stroke('#0000FF')
    this.p.fill('lime')
    this.p.rect(left,-150,right,50)
    let textW = 100;
    let textH = 25;



let acrW = 200;
let height = 20;
let halfH = height/2;
top = 10
let down = 20;

      this.p.beginShape();
        this.p.vertex(-50,0);
        this.p.quadraticVertex(
        -25, 0,
          0, 10);
        this.p.quadraticVertex(
        acrW/8, 20,
          acrW/4, 10);
          this.p.quadraticVertex(
          acrW/2.666, 0,
          acrW/2, 10);

            this.p.quadraticVertex(
          acrW/1.66, 20,
            acrW/1.333, 10);
              this.p.quadraticVertex(
              acrW/1.14, 0,
                acrW, 10);

               this.p.endShape();

      this.translate(false)
    //let dx = this.p.dist(right,left)

}
makeRect(){

  this.translate(true)
    this.makeOutSharfe()
    var {centerX,centerY} = this.centerBag;
   centerX = centerX-this.innerGap;
   centerY = centerY-this.innerGap;
    let topBottomGap = this.topBottomGap;
  let top =0- (centerY-topBottomGap);
    let bottom =(centerY*2) -topBottomGap;
    let left = 0- centerX;
    let right =centerX*2;

this.p.push()
this.p.stroke(this.p.color('#ffff'))
this.p.fill(this.p.color('#BDB76B'))
  this.p.rect(left,top,right,bottom,this.borderCorner)
  this.p.pop()

    this.translate(false)
}
makeCurve(pLR:number = 5){
this.translate(true)
    var {centerX,centerY} = this.centerBag;
   centerX = centerX-this.innerGap;
   centerY = centerY-this.innerGap;
    const p = this.p;
  let pices = 15;
  let height = centerY-this.topBottomGap;

  let increase =Math.floor((height/pices))

  let gap = increase*4;
  let cw = centerX-pLR




    //  p.quadraticVertex(640, 103,854, gap);

var basePoint = 0;
  for (let i = 0; i < (height-gap) ; i+=increase) {


let up = basePoint-gap
let down = basePoint+gap
p.noFill()
p.strokeWeight(4)
p.stroke('#FF1493')
    p.beginShape();
      p.vertex(-cw,basePoint);
      p.quadraticVertex(-cw/2, up,0, basePoint);
        p.quadraticVertex(
          (cw/2),  down,
           cw, basePoint);
             p.endShape();
               basePoint+=increase;
  }
this.translate(false)
}
  makeBag(){
    const {centerX,centerY} = this.centerBag;


  }
}
