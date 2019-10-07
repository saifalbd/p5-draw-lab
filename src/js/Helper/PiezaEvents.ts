import {utility} from './utility'
export class PiezaEvents {
  readonly p:p5;
  constructor(p:p5){
    this.p = p;
  }
  showIndPosition(_x:number|0,_y:number|0,fontSize:number|0){

    let vartical = 'right2';
    let horigontal = 'bottom2'

let x = _x
let y = _y

    this.p.textSize(fontSize);

    let txt = `x:${Math.round(x)},y:${Math.round(y)}`
    let tw = this.p.textWidth(txt);
    let mx = utility.percentOf(tw,20)

    let rx = x-(tw/2)
    let x2 = tw+mx;
    let y2 = utility.percentOf(fontSize,60)+fontSize

if(vartical){
  if(vartical === 'left'){
    x = x-(tw/2)-(mx/2);
  }else if(vartical === 'right'){
    x = x+(tw/2)+(mx/2);
  }
}
if(horigontal){
  if( horigontal === 'top'){
    y = y-(y2/2);
  }else if( horigontal === 'bottom'){
    y = y+(y2/2);
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
}
