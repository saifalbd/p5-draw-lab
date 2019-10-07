  interface methodArg {radius:number|0; color:string;}
  import {Pieza} from '../Pieza'

export abstract class PiezaMetarialsAbs{
  public pieza:Pieza; // Pieza wholeAngelPos() method
  public _diameter:number|0 =20;
  protected _defaultColor:string = '#0e011c';
  protected  _color:string ='black';
  protected  _type:string = 'circle';
    protected _indicator:boolean= true;

  diameter(num:number):this{
    if(num>100){
      throw new Error(num+ ' allow in smaller then 100')
    }
    const smaller =Math.min(this.pieza.insideW,this.pieza.insideH);
    this._diameter =   this.pieza.percentOf(smaller,num);
    return this;
  }

  get radius():number|0{
    let radius = this._diameter/2;
    return radius;
   }
  color(color:string):this{this._color = color;
    return this;
  }
  type(typeName:string):this{
    if(typeName==='circle' || typeName==='cross'){
      this._type = typeName
    }else{
      throw new Error(`type paramiter allow only circle or cross default circle`);
    }
    return this;
  }


  abstract mTC(arg:methodArg ):void;
  abstract mBC(arg:methodArg):void;
  abstract mLC(arg:methodArg):void;
  abstract mRC(arg:methodArg):void;
  abstract allAngelMarginCenter(arg:methodArg):void
  abstract tC(arg:methodArg):void;
  abstract lC(arg:methodArg):void;
  abstract rC(arg:methodArg):void;
  abstract bC(arg:methodArg):void;
  abstract allAngelCenter(arg:methodArg):void;
  abstract tL(arg:methodArg):void;
  abstract tR(arg:methodArg):void;
  abstract bL(arg:methodArg):void;
  abstract bR(arg:methodArg):void;
  abstract allAngel(arg:methodArg):void
  abstract mTl(arg:methodArg):void;
  abstract mTr(arg:methodArg):void;
  abstract mBl(arg:methodArg):void;
  abstract mBr(arg:methodArg):void;
  abstract allMarginAngle(arg:methodArg):void
  abstract all(arg:methodArg):void;

}
