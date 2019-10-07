
export class BloodSign{
  protected p:p5
  protected position:xandy;
  protected size:number;
  protected text:string;
  protected currentPosition:{x:number,y:number};
  constructor(p:p5,size:number,position:xandy,text:string){
this.p = p;
this.size = size;
this.position = position;
this.text = text;
this.setPosition()
  }

  get h(){
    return this.size;
  }
  get w(){
  return  this.h/2.5;
  }

setPosition(){
  this.currentPosition = {x:this.position.x-(this.w/2),y:this.position.y}
  this.p.translate(this.currentPosition.x,this.currentPosition.y);
}
  makeShape(){
    const p = this.p
    let h =this.h;
    let w = this.w;
    let top1 = 0;
    let top2 =h /4;
    let top3 = h /2;
    let top4= h/1;
    let left1 = 0;
    let left2= w /4;
    let left3 = w /2;
    let left4 = w /3;
    let left5 = w;

p.strokeWeight(4)

    p.beginShape();
    p.vertex(left1, top3);
    p.bezierVertex(left1,top2,left3,top2,left3,top1);
    p.bezierVertex(left3,top2,left5,top2,left5,top3);
    p.bezierVertex(left5,top4,left1,top4,left1,top3);

    p.endShape();
return this;
  }
makeArcSign(){

  const p = this.p;
  const w = this.w;
  const h = this.h;
  p.noFill()
  p.strokeWeight(((w+h)/2)/25)
  let addx = w/12;
  let addy =h/12;
  let bx1 = addx;
  let bx2 = addx;
  let bx3 = w/4;
  let bx4 = w/2;
  let by1 = h/2;
  let by2 = h/1.3333333333333335-addy;
  let by3 = h/1.142857142857143-addy;
  let by4 = h/1.142857142857143-addy;


  p.bezier(bx1,by1,bx2,by2,bx3,by3,bx4,by4);
  return this;
}
addText(){
  const p = this.p;
  const w = this.w;
  const h = this.h;
  let centerX = this.w/2;
  let centerY = this.h /2;
  p.textSize(((w+h)/2)/5)
  p.textAlign(p.CENTER);
  p.text(this.text,centerX ,centerY );
  return this;
}
reset(){
  this.p.translate(-this.currentPosition.x,-this.currentPosition.y);
}
}
