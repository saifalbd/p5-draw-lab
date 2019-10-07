import collect from 'collect.js'
import {
  allMarginCenterPosInterface,
  allAngelCenterPosInterface,
  allAngelPosInterface,
  allMarginAnglePosInterface,
  wholeAngelPosInterface,

} from './Interaces/PiezaInterface'
interface xandy {x:number|0;y:number|0;}

export class Pieza {
  public id:number;
  private _width:number;
  private _height:number;
  public moveX:number=0;
  public moveY:number=0;
  private _margin:number = 0;
  public _marginLeft:number= 0;
  public _marginRight:number =0;
  public _marginTop:number = 0;
  public _marginBottom:number =0;

  constructor(width:number,height:number){
this.height = height;
this.width = width;
  }
  /**
  height
  **/
  get h():number {return this._height;}
  /**
  width
  **/
  get w():number{return this._width;}
  /**
  width
  **/
  get x():number {return this.w;}
  /**
  height
  **/
  get y():number{return this.h;}
  get insideW():number{
    return this.w-(this.marginLeft+this.marginRight)
  }
  get insideH():number{
    return this.h-(this.marginTop+this.marginBottom)
  }
  set width(num:number){this._width = num;}
  set height(num:number){this._height = num;}

  get marginTop():number{return this._marginTop;}
  get marginLeft():number{return this._marginLeft;}
  get marginRight():number{return this._marginRight;}
  get marginBottom():number{return this._marginBottom;}
  set marginTop(num:number){
      //y axis
    this._marginTop = this.marginPercent('y',num);
  }
  set marginBottom(num:number){
    //y axis
    this._marginBottom = this.marginPercent('y',num);
  }
  set marginLeft(num:number){
      //x axis
  this._marginLeft = this.marginPercent('x',num);
  }
  set marginRight(num:number){
    //x axis
    this._marginRight =this.marginPercent('x',num);;
  }

  set margin(num:number|0){
    this._margin = num;
    this.marginTop = num
    this.marginBottom= num;
    this.marginLeft = num;
    this.marginRight = num;
  }

/**
move left val + moveX
**/
private  addMoveX(num:number|0=0):number|0{
    return num+this.moveX;
  }

  /**
  move Top val + moveY
  **/
private  addMoveY(num:number|0=0):number|0{
    return num+this.moveY;
  }

/**
set moveX = 0
set moveY = 0;
**/
  moveReset(){
    this.moveX =0;
    this.moveY =0;
  }

  /**
  center Position of top center and left center
  **/
  get center():{x:number,y:number}{
        let x = this.addMoveX(this.halfX);
        let y=this.addMoveY(this.halfY);
      return {x,y}
    }
    /**
    Position object top and left
    **/
  get topLeft():{x:number|0,y:number|0}{
    let x = this.addMoveX(0);
    let y=this.addMoveY(0);
    return {x,y}
  }
  /**
  Position object top and Right
  **/
  get topRight():xandy{
    let x = this.addMoveX(this.w);
    let y = this.addMoveY(0);
    return {x,y}
  }
    /**
    Position object  Right-left /2
    **/
  get topCenter(){
    let x = this.addMoveX(this.halfX);
    let y =this.addMoveY(0);
    return {x,y};
  }
  /**
  Position object bottom Right-left /2
  **/
  get bottomCenter(){
    let x = this.addMoveX(this.halfX);
    let y = this.addMoveY(this.y);
    return {x,y};
  }
  /**
  Position object left bottom-top /2
  **/
  get leftCenter(){
    let x = this.addMoveX(0);
    let y = this.addMoveY(this.halfY);
    return {x,y};
  }
  /**
  Position object right bottom-top /2
  **/
  get rightCenter():xandy{
    let x = this.addMoveX(this.x);
    let y = this.addMoveY(this.halfY);
    return {x,y};
  }

  /**
  Position object bottom left = 0; top = height
  **/
  get bottomLeft():xandy{
    let x = this.addMoveX(0);
    let y = this.addMoveY(this.h);
    return {x,y}
  }
  /**
  Position object bottom right = 0; top = height
  **/
  get bottomRight():xandy{
    let x = this.addMoveX(this.w);
    let y = this.addMoveY(this.h);
    return {x,y}
  }
  /**
    percentise
  **/
  percentOf(percentFor:number|0,percentOf:number|0){
      return (percentFor/100)*percentOf
  }
  /**
  property is width or height property name
  num value of margin
  **/

  private marginPercent(property:string,percent:number):number|0{
    if(percent>100){
      throw new Error('margin mustbe between 0-100');
    }
    var wOrhHalf:number;
    if(property ==='x'){
      wOrhHalf = this.halfX;
    }else if(property==='y'){
      wOrhHalf = this.halfY;
    }else{
      throw new Error(`property only allow string x or y you define `+property)
    }

let perVal = this.percentOf(wOrhHalf,percent);

    return perVal;
  }
  /**
  Position of with Margin
  **/
  get mTopLeft():xandy{
    let mLeft = this.marginLeft;
    let mTop = this.marginTop
    let x = this.topLeft.x+mLeft;
    let y = this.topLeft.y+mTop
    return {x,y}

  }
  /**
  Position of with margin
  **/
  get mTopRight():xandy{
    let x = this.topRight.x-this.marginRight
    let y = this.topRight.y+this.marginTop
    return {x,y}
  }
  /**
  Position of with margin
  **/
  get mBottomLeft():xandy{

    let x = this.bottomLeft.x+this.marginLeft;
    let y = this.bottomLeft.y-this.marginBottom
    return {x,y}
  }
  /**
  Position of with margin
  **/
  get mBottomRight():xandy{
    let x = this.bottomRight.x-this.marginRight
    let y = this.bottomRight.y-this.marginBottom
    return {x,y}
  }

  get mTopCenter():xandy{
let moveLeft = (this.marginLeft+this.marginRight)/2;
let halfVal = (this.mTopRight.x - this.mTopLeft.x)/2;
    let x = this.addMoveX(moveLeft+halfVal)
  let y = this.addMoveY(this.marginTop);
    return {x,y}
  }
  get mBottomCenter():xandy{
let moveLeft = (this.marginLeft+this.marginRight)/2;
let halfVal = (this.mTopRight.x - this.mTopLeft.x)/2;
let y = this.addMoveY(this.y-this.marginBottom)
    let x = this.addMoveX(moveLeft+halfVal)
    return {x,y}
  }
  get mLeftCenter():xandy{
    let x = this.addMoveX(this.marginLeft);
    let moveTop = this.mTopLeft.y
    let halfVal =moveTop- ((this.mTopLeft.y - this.mBottomLeft.y)/2);
    let y = halfVal;
    return {x,y}
  }
  get mRightCenter():xandy{
    let x = this.addMoveX(this.x-this.marginRight);
    let moveTop = this.mTopRight.y
    let halfVal =moveTop- ((this.mTopRight.y - this.mBottomRight.y)/2);
    let y = halfVal;
    return {x,y}
  }

  /**
  halg value of width
  **/
  get halfX():number{return this.xDivide(2);}
  /**
  halp value of height
  **/
  get halfY():number{return this.yDivide(2);}

  /**
  four angel Position object <x,y> with margin
  **/
  get allMarginAnglePos():allMarginAnglePosInterface{
    const {
      mTopLeft,
      mTopRight,
      mBottomLeft,
      mBottomRight} = this;

      return {
        mTopLeft,
        mTopRight,
        mBottomLeft,
        mBottomRight};
  }

get  allMarginCenterPos():allMarginCenterPosInterface{
    const {mTopCenter,mBottomCenter, mLeftCenter, mRightCenter} = this;
    return {mTopCenter,mBottomCenter, mLeftCenter, mRightCenter};
  }
  /**
  four angel Position object <x,y> withOut margin
  **/
  get allAngelPos():allAngelPosInterface{
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    }=this;
    return {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    };
  }
  /**
   angel Position start-end/2 Position
  **/
get  allAngelCenterPos():allAngelCenterPosInterface{
const {
  center,
  leftCenter,
  topCenter,
  rightCenter,
  bottomCenter
} = this;

const result = {
  center,
  leftCenter,
  topCenter,
  rightCenter,
  bottomCenter
}
return result;


  }


/**
all angel information detail object
**/
get  wholeAngelPos():wholeAngelPosInterface{
    let centerPos = this.allAngelCenterPos;
    let angelPos = this.allAngelPos
    let marginAnglePos = this.allMarginAnglePos;
    let allMarginCenterPos = this.allMarginCenterPos;

    return {...centerPos,...angelPos,...marginAnglePos,...allMarginCenterPos}
  }

/**
divide width on value
**/
  xDivide(num:number):number{return this.w/num;}
  /**
  divide height on value
  **/
  yDivide(num:number):number{return this.h/num;}










  /**
  custom center Position
  **/
  centerPos(x:number,x2:number,y:number,y2:number):xandy{
    let centerX = x+((x2-x)/2);
    let centerY = y+((y2-y)/2);
    return {x:centerX,y:centerY}
  }

}
