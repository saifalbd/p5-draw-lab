import {Pieza } from './../Helper/Pieza';
import collect from 'collect.js'
import {PiezaPosition} from './../Helper/PiezaPosition'
import * as P5 from 'p5';
import {PiezaMetarialsCollection} from './../Helper/PiezaMetarialsCollection'

export class DrawBoard extends Pieza {

  protected _pieces:number = 2
  protected loopIndex:number =0;
  public marginis:number|0 =50;
  public _marginTop = 0;
  public _marginLeft = 0;
  public _marginRight = 0;
  public _marginBottom = 0;

  protected p:P5;
  constructor(p:P5,pieceRoot:number){
    super(p.width-200,p.height-200);
    this._pieces = pieceRoot;
    this.p = p;
    //for test remove after test
      //for test remove after test
        //for test remove after test
          //for test remove after test
    //this.p.translate(-50,-50)
    this.p.translate(-this.w/2,-this.h/2)
  }

get wholePieces(){
const result = [];
var count = 0;
for (var x = 0; x < this.w; x+=this.xPieceVal) {

    for (let y = 0; y < this.h; y+=this.yPieceVal) {
        let startX:number = x;
        let endX = x+this.xPieceVal;
        let startY = y;
        let endY = y+this.yPieceVal;

         let width  = endX-startX;
         let height = endY-startY;
         let helper = new Pieza(width,height);
      helper.moveX = startX;
      helper.moveY = startY;
      count++;
      helper.id = count;

    helper.marginLeft = this._marginLeft
    helper.marginTop = this._marginTop
    helper.marginRight = this._marginRight
    helper.marginBottom = this._marginBottom


const obj =helper.wholeAngelPos;

        result.push(helper)




    }
}




return result;
}
  set pieces(num:number){
    this._pieces = num;
  }
  get xPieceVal():number{return this.xDivide(this._pieces);}
  get yPieceVal():number{return this.yDivide(this._pieces);}


public make(p:P5){

this.wholePieces.forEach(item=>{

   const {
     mTopLeft,
     mTopRight,
     mBottomLeft,
     mBottomRight,
     mTopCenter,
     mBottomCenter,
     mLeftCenter,
     mRightCenter,
     topCenter,
     leftCenter,
     rightCenter,
     bottomCenter,
     topLeft,
     topRight,
     bottomLeft,
     bottomRight



   } =item;
   p.fill(25)
   // left to right top
   p.line(mTopLeft.x,mTopLeft.y,mTopRight.x,mTopRight.y)
   // left to right bottom
   p.line(mBottomLeft.x,mBottomLeft.y,mBottomRight.x,mBottomRight.y)
   // top to Bottom left
   p.line(mTopLeft.x,mTopLeft.y,mBottomLeft.x,mBottomLeft.y)
   // top to Bottom Right
   p.line( mTopRight.x, mTopRight.y,mBottomRight.x,mBottomRight.y)

        p.fill(255,0,0)
        // with margin
  //     p.circle(mTopCenter.x,mTopCenter.y,20)
  //     p.circle(mBottomCenter.x,mBottomCenter.y,20)
  //     p.circle(mLeftCenter.x,mLeftCenter.y,20)
  //       p.circle(mRightCenter.x,mRightCenter.y,20)
  //
  //       //dkd
  //
  //       p.circle(mTopLeft.x,mTopLeft.y,10)
  //       p.circle(mTopRight.x,mTopRight.y,10)
  //       p.circle(mBottomLeft.x,mBottomLeft.y,10)
  //         p.circle(mBottomRight.x,mBottomRight.y,10)
  // p.fill(0,200,0)
  // //without margin
  //       p.circle(topCenter.x,topCenter.y,10)
  //       p.circle(bottomCenter.x,bottomCenter.y,10)
  //       p.circle(leftCenter.x,leftCenter.y,10)
  //         p.circle(rightCenter.x,rightCenter.y,10)

          // topLeft,
          // topRight,
          // bottomLeft,
          // bottomRight

          // p.circle(topLeft.x,topLeft.y,10)
          // p.circle(topRight.x,topRight.y,10)
          // p.circle(bottomLeft.x,bottomLeft.y,10)
          //   p.circle(bottomRight.x,bottomRight.y,10)

  p.noFill()






  //collection.allAngel()
//   p.text(new String(`window topRight.x =${this.w} bottomRight.y =${this.h}`),100,50);


 })

 let collection = new PiezaMetarialsCollection(this.wholePieces,this.p);
 collection.showPos(true,20)
  let pos = new PiezaPosition({
    pieza:this.wholePieces[0],
    p:this.p,
    bg:'black',
    color:'black',
    fontSize:10
  })
  pos.makeOfCollection(this.wholePieces)

 //this.p.circle(this.center.x,this.center.y,20)


}


  get(){



this.make(this.p)

  }

}
