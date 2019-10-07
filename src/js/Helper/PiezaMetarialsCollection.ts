
import {PiezaMetarialsAbs} from './abstructs/PiezaMetarialsAbs'
import {PiezaMetarials} from './PiezaMetarials'
import {Pieza} from './Pieza'
interface methodArg {radius:number|0; color:string;}

export class PiezaMetarialsCollection extends PiezaMetarialsAbs{
  public collection:Array<Pieza>; // Pieza wholeAngelPos() method collection
  private p:p5;
  public _showPos:boolean= false;
  private _positionFontSize= 20;

    constructor(collection:Array<Pieza>,p:p5){
      super()
  this.collection =collection;
  this.p = p;
  }


private  runLoop(propery:string):void{

const self= this;
    this.collection.forEach((item,key)=>{

let pieza = new PiezaMetarials(item,this.p);
pieza.diameter(this._diameter).color(this._color)

if ( typeof pieza[propery] === 'function') {
  pieza.showPos(self._showPos,this._positionFontSize);
    pieza[propery]();
pieza.showPos(false,this._positionFontSize);
}else{
  throw new Error(propery+'propert not exist')
}

    });
  }
  showPos(pos:boolean,fontSize:number|0):this{
     this._showPos =pos;
     this._positionFontSize = fontSize;

     return this;
   }

    mTC( ):void{
      this.runLoop('mTC')
    }
    mBC():void{
      this.runLoop('mBC')
    }
    mLC():void{
      this.runLoop('mLC')
    }
    mRC():void{
      this.runLoop('mRC')
    }
    allAngelMarginCenter():void{
      this.runLoop('allAngelMarginCenter')
    }
    tC():void{
      this.runLoop('tC')
    }
    lC():void{
      this.runLoop('lC')
    }
    rC():void{
        this.runLoop('rC')
    }
    bC():void{
      this.runLoop('bC')
    }
    allAngelCenter():void{
      this.runLoop('allAngelCenter')
    }
    tL():void{
      this.runLoop('tL')
    }
    tR():void{
      this.runLoop('tR')
    }
    bL():void{
      this.runLoop('bL')
    }
    bR():void{
      this.runLoop('bR')
    }
    allAngel():void{
      this.runLoop('allAngel')
    }
    mTl():void{
      this.runLoop('mTl')
    }
    mTr():void{
      this.runLoop('mTr')
    }
    mBl():void{
      this.runLoop('mBl')
    }
    mBr():void{
      this.runLoop('mBr')
    }
    allMarginAngle():void{
      this.runLoop('allMarginAngle')
    }
    all():void{
      this.runLoop('all')
    }
  }
