import {Pieza} from './Pieza'
import {utility} from './utility'
import collect from 'collect.js'
import {
  allMarginCenterPosInterface,
  allAngelCenterPosInterface,
  allAngelPosInterface,
  allMarginAnglePosInterface,
  wholeAngelPosInterface,

} from './Interaces/PiezaInterface'
interface cons {
pieza:Pieza,
p:p5,
bg:string,
color:string,
fontSize:number,
}
interface side {
  vertical:string;
  horizontal:string
}
interface  posObj {
    x:number|0,
    y:number|0,
    touchBody: string[]
}

 export  class PiezaPosition {
    public pieza:Pieza; // Pieza wholeAngelPos() method
    public p:p5
    public fontSize:number;
    public _vartical:string = null;
    public _horigontal:string =null;




    constructor(obj:cons ){
      this.pieza =<Pieza> obj.pieza;
      this.p =obj.p;
      this.fontSize = obj.fontSize;

    }


    showIndPosition(obj:posObj){

      let vartical = this._vartical;
      let horigontal = this._horigontal

  let x = obj.x
  let y = obj.y

let fontSize = this.fontSize;
      this.p.textSize(fontSize);

      let txt = `x:${Math.round(x)},y:${Math.round(y)}`
      let tw = this.p.textWidth(txt);
      let mx = utility.percentOf(tw,20)

      let rx = x-(tw/2)
      let x2 = tw+mx;
      let y2 = utility.percentOf(fontSize,60)+fontSize
      let left =  obj.touchBody.indexOf('left') > -1
      let right = obj.touchBody.indexOf("right") > -1
      let top = obj.touchBody.indexOf('top') > -1
      let bottom = obj.touchBody.indexOf('bottom') > -1

if(left || right){
    if(left){
    x = x+(tw/2)+(mx/2);
    }else if(right){
        x = x-(tw/2)-(mx/2);

    }
  }
  if(top ||bottom){
    if(top){
    y = y+(y2/2);
    }else if(bottom){
        y = y-(y2/2);

    }
  }




  this.p.rectMode(this.p.CENTER); // Set rectMode to CORNERS

  this.p.colorMode(this.p.HSB);
  this.p.fill(0, 0, 0);

        this.p.rect(x, y, x2, y2);

        this.p.textAlign(this.p.CENTER,this.p.CENTER)
        this.p.fill(0, 0, 255);
        this.p.text(txt, x, y);

    }

    addSide(obj:{x:number|0,y:number|0,touchBody:Array<string>}):side{
      let center = this.pieza.wholeAngelPos.center;

      var side:side = {vertical:null,horizontal:null}

      let {x,y} = obj;
      if(center.x<x){
        side.vertical = 'left'
      }else if (center.x>x){
          side.vertical = 'right'
      }

      if(center.y<y){
        side.horizontal = 'top'
      }else if (center.y>y){
        side.horizontal = 'bottom'
      }


      if(center.x==x){
        side.vertical = 'center'
      }
      if(center.y==y){
        side.horizontal = 'center'
      }


        return side

}


addTouchBody(obj:xandy):{x:number,y:number,touchBody:Array<number>}{
  let left = 0;
  let right = Math.floor(this.p.width)
  let top = 0;
  let bottom = Math.floor(this.p.height);
  var touchBody = [];
  const {x,y}= obj;

if(x<=left || x>=right  ||  y<=top  || y>=bottom){
  if(x<=left){touchBody.push('left');}
  if(x>=right){touchBody.push('right');}
  if(y<=top){touchBody.push('top');}
  if(y>=bottom){touchBody.push('bottom');}
}else{
  touchBody.push('center');
}



  return {x,y,touchBody}

}



    makeOfCollection(arr:Array<Pieza>){
      let collection = [];
 let call = collect(arr).map(item=>{

  let whole  = item.wholeAngelPos;
let arr =  collect(whole)
.filter(item=>item.hasOwnProperty('x') && item.hasOwnProperty('y'))
.map((list:xandy)=>{
    let t =  this.addTouchBody(list)
    let {x,y,touchBody} = t;

return {x,y,touchBody}



}).toArray()

  return arr;
}).collapse().sortBy('x').toArray();

(call as Array<xandy>).forEach(item=>{
  if(!collection.length){
    collection.push(item)
  }else{
    let {x,y} = item;
    let find = collection .find(list=>list.x ===x && list.y ===y)
    if(!find){
    collection .push(item)
    }
  }

})
collection.forEach(item=>{
  this.showIndPosition(item)
})
return collection;


}
}
