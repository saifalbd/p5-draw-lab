interface xandy {x:number|0,y:number|0,angel?:number}
import {HexagonPoints} from './../Helper/HexagonPoints'
import {HexaMetarials} from './../items/HexaMetarials'

import collect from 'collect.js'
export class CircleMenu{
private circumference:number;
private p:p5;
private _radius:number = 0;
private _removeArea = 0;
private _width:number  = 0;
private _height:number = 0
public _centerX = 0
public _centerY =0;
public _pieces =8;
public _hexaPoints:Array<xandy>
public _landPoints:Array<xandy>

private _startingAngel:number|0 =0;

  constructor(p:p5,circumference:number){
    this.p = p;
    this.circumference = circumference;
  }
  set radius(num:number){
    this.circumference = num*(2*this.p.PI)
  }
  get radius():number{

    return this.circumference/(2*this.p.PI);
  }
  set removeArcArea(num:number){
    this._removeArea = num;
  }
  get perimeter(){
    return 2*Math.PI*this.radius-this._removeArea;
  }

  get center():xandy{
  let x = this._centerX;
  let y = this._centerY;
  return {x,y}
}
get pieceHalf(){
return  (2*Math.PI/this._pieces)/2
}
  get startingAngel(){
     let addHalf = this.pieceHalf

    return this._startingAngel+addHalf
  }

get  hexaPoints(){
  if(!this._hexaPoints){
    this._hexaPoints = HexagonPoints.radius(this.radius)
      .numberOfPoints(this._pieces).position({x:this.center.x,y:this.center.y})
    .startFrom(this.startingAngel)
      .getPoints()
  }
  return this._hexaPoints
  }

  showPoint(points,showPos:boolean=false){

    points.forEach((item,key)=>{
      let index = showPos?null:key;
      let pos = showPos ? true:false;
      HexaMetarials.showPoint(this.p,item,{color:'red',index,pos})


    })

  }





circumcircleOfArc(land:number,height:number,angel:number){
  let radius = (land+height)/2;
  let pi = Math.PI;
  let val =(radius)*angel
  console.log(val.toFixed(2),angel.toFixed(2))

  return val;
}

get landPoints(){
  return this.hexaPoints.map((item,key)=>{
  let x = parseInt(this.circumcircleOfArc(this.radius,this.radius,item.angel ).toFixed(3))
let y = 0
return {x,y}
})

}





  public makeArc(pices:number){


  }
}
