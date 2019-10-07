import * as P5 from 'p5';

import {DrawBoard} from './DrawBoard'
import {Image} from './Image';
import {BloodSign} from './../items/BloodSign'
import {HexagonPoints} from './../Helper/HexagonPoints'
import {HexaMetarials} from './../items/HexaMetarials'
import {BloodBag} from './../items/BloodBag'
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

let sketch = function(p:p5) {
    let x = 100;
    let y = 100




    p.setup = function() {
      // let ww = window.innerWidth;
      // let hh = window.innerHeight;


     ww =500;
   hh = 500;

        p.createCanvas(ww, hh);
        p.background('#fffdd0');
p.push()
 let demoboard = new DrawBoard(p,2)
 demoboard.get()
 p.pop()

 p.rectMode(p.CENTER)


let circumference = p.height;

let radius = circumference/(2*p.PI)

console.log(radius)
//console.log(circumference)
 let pos = HexagonPoints.radius(radius)
 .numberOfPoints(6).position({x:p.width/2,y:p.height/2})
 .getPoints()
 cirCirlePoints =pos;


 for (let i = 0; i <= (circumference); i+=(circumference/5)) {
targetPoints.push({x:i,y:500})
 }
 console.log(targetPoints)
 HexagonPoints.indecator(p,pos)

let cirOne = {x:100,y:250}
let cirTwo = {x:200,y:100}
targetPoints.forEach(item=>{
  p.circle(item.x,item.y,30)
})
p.fill('red')
p.circle(cirOne.x,cirOne.y,50)
    p.fill('gold')
p.circle(cirTwo.x,cirTwo.y,50)


}

p.mousePressed = function(){
targetX  = p.mouseX
targetY  = p.mouseY
x1 = p.random(500)
y1 = p.random(500)
x = p.random(500)
y = p.random(500)
}


    p.draw = function() {
      p.clear()
      p.push()
       let demoboard = new DrawBoard(p,2)
       demoboard.get()
       p.pop()
      let centerX =p.width/2
      let centerY = p.height/2

 x =  p.lerp( x , targetX, 0.2)
y =  p.lerp( y , targetY, 0.1)
x1 =  p.lerp( x1 , targetX, 0.1)
y1 =  p.lerp( y1 , targetY, 0.1)

var arr = []
targetPoints.forEach((item,key)=>{
  let x,y;
  x = p.lerp(cirCirlePoints[key].x , item.x, 0.001)
    y = p.lerp( cirCirlePoints[key].y , item.y, 0.001)
  arr.push({x,y})
    p.circle(  x,y,50)
})
cirCirlePoints = arr;
//console.log(arr)

      p.fill('black')
  p.circle(targetX,targetY,10)


      p.fill('gold')
      p.circle(x,  y,50)
        p.fill('blue')
      p.circle(x1,  y1,50)


//p.noLoop()
    };
};

 new P5(sketch);
