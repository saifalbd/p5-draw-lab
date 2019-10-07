import * as P5 from 'p5';

import {DrawBoard} from './DrawBoard'
import {Image} from './Image';
import {BloodSign} from './../items/BloodSign'
import {HexagonPoints} from './../Helper/HexagonPoints'
import {HexaMetarials} from './../items/HexaMetarials'
import {BloodBag} from './../items/BloodBag'
import {CircleMenu} from './../items/CircleMenu'
import {utility} from './../Helper/utility'



var ww,hh;
var count = 0;
var color;
var cirCirlePoints = [];
var targetPoints = [];
var targetX = 200;
var targetY = 100;
var x = 0;
var y = 80;

var x1 = 80;
var y1 = 250;
var landPoints:Array<{x:number,y:number}>;
var hexaPoints:Array<{x:number,y:number}>;
var menu;
let sketch = function(p:p5) {
    let x = 100;
    let y = 100




    p.setup = function() {
      // let ww = window.innerWidth;
      // let hh = window.innerHeight;


     ww =700;
   hh = 700;

        p.createCanvas(ww, hh);
        p.background('#fffdd0');
        // p.translate(p.width/2,p.height/2)
    //     p.rectMode(p.CENTER)
p.push()
//   p.translate(-p.width/4,-p.height/4)
 let demoboard = new DrawBoard(p,1)
//demoboard.get()
 //p.translate(p.width/4,p.height/4)
 p.pop()

//p.translate(p.width/2,p.height/2)
menu = new CircleMenu(p,p.width)
hexaPoints= menu.hexaPoints;
landPoints = menu.landPoints;



//menu.makeArc(15)


}

    p.draw = function() {
p.translate(p.width/2,p.height/2)
p.clear()
p.circle(0,0,50)

hexaPoints = hexaPoints.map((item,key)=>{
let x = p.lerp(item.x,landPoints[key].x,0.01);
let y =  p.lerp(item.y,landPoints[key].y+100,0.01);
HexaMetarials.showPoint(p,{x:x,y:y},{index:key,color:'red'})
p.fill('lime')
//console.log(landPoints[key])
HexaMetarials.showPoint(p,{x:landPoints[key].x,y:landPoints[key].y},{index:key})

return {x,y}
})

//  p.noLoop()
    };


};

 new P5(sketch);
