import {Pieza} from "./../Helper/Pieza";
export class Image extends Pieza{

private piece:number;
constructor(width:number,height:number,piece:number){
super(width,height)
this.piece = piece;
}

get picesVal():Array<Pieza>{
let  result =[] ;
  let xDiamiter = this.xDivide(this.piece);
  let yDiamiter = this.yDivide(this.piece);
  for (var x = 0; x < this.w; x+=xDiamiter) {

      for (let y = 0; y < this.h; y+=yDiamiter) {
          let startX:number = x;
          let endX = x+xDiamiter;
          let startY = y;
          let endY = y+yDiamiter;

           let width  = endX-startX;
           let height = endY-startY;
           let helper = new Pieza(width,height);
        helper.moveX = startX;
        helper.moveY = startY;
    

                result.push(helper)

      }
    }

return result;
}

}
