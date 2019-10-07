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
let sketch = function(p:p5) {
    let x = 100;
    let y = 100





    p.setup = function() {
      let ww = window.innerWidth;
      let hh = window.innerHeight;


   //   ww = 1000;
   // hh = 1000;

        p.createCanvas(ww, hh);
        p.background('#fffdd0');

        let bag = new BloodBag(p,{x:854,y:411},{x:500,y:700})
      bag.makeRect()
    bag.makeCurve()
    bag.makeHoq()
    bag.makeInputSarpe()

 let demoboard = new DrawBoard(p,4)
//demoboard.get()
//
//
//
//
//
//
//
//
//         let board = new DrawBoard(p,4)
//         let pices = board.wholePieces.map(item=>item)
//      //board.get()
//
// p.fill('red')
//
//
//         // HexaMetarials.star(p,8)
//
//
//
//
//         let pos = HexagonPoints.radius(200).innerRadius(1)
//         .numberOfPoints(4).position({x:400,y:400})
//         .getPointsWithInner()
//
//
//
//
//
//                   p.beginShape();
//
//
//                   let o = pos.outer;
//                   let i = pos.inner;
// p.vertex(o[0].x, o[0].y);
// p.bezierVertex(
//   i[0].x, i[0].y,
//    i[1].x, i[1].y,
//     o[1].x, o[1].y);
//
//     p.bezierVertex(
//       i[1].x, i[1].y,
//        i[2].x, i[2].y,
//         o[2].x, o[2].y);
//
//
//
//
//
//
//
//
//
//         let eait = new DrawBoard(p,10)
//         p.stroke('#0d022b')
//       eait.wholePieces.forEach((item,key)=>{
//
//
// p.push()
// let {x,y} = item.center;
// p.noStroke()
// let hex =HexaMetarials.position({x,y}).radius(15).innerRadius(7);
// if(utility.isEven(key)){
//   hex.starRouded(p,5)
// }else{
//     hex.starRouded(p,4)
// }
//
//
//         p.pop()
//
//       })
//
//
//
//
//
//
//
// let coloris = (index:number|0)=>
// {
//   let colors = [
//     '#EA3C12',
//     '#df7ce5',
//   '#d955e1',
//   '#d93ae3 ',
//   '#d51ee1',
//   '#cd01db'
//   ]
//
//   return p.color(colors[index])
// }
//
// const bloodGroups  = ["A+","A-","B+","B+","B-","O+","O-","AB+","AB-"];
// //let coloris = (index:number|0)=>{return p.color(75, 60, 130)}
//
//
//
//
//
//
//
//
//
//
//
//
// p.stroke(coloris(0))
// p.strokeWeight(7)
// p.noFill()
// p.beginShape();
//
//   p.vertex(pices[3].bottomLeft.x, pices[3].bottomLeft.y);
//   for (let i = 1; i <5; i++) {
//      let index = i*3;
//     p.bezierVertex(
//       pices[index].bottomCenter.x,
//        pices[index].bottomCenter.y,
//        pices[index].bottomRight.x,
//         pices[index].bottomRight.y,
//         pices[index].topRight.x,
//          pices[index].topRight.y);
//   }
//
//     //p.vertex(pices[0].topLeft.x, pices[0].topLeft.y);
//   //  p.vertex(pices[3].bottomLeft.x, pices[3].bottomLeft.y);
//   p.endShape();
//           //p.line(0, p.height, p.width, 0);
//
//
//
//
// p.noStroke()
//  p.fill(coloris(5))
//         p.beginShape();
//           p.vertex(pices[3].bottomLeft.x, pices[3].bottomLeft.y);
//           for (let i = 1; i <5; i++) {
//              let index = i*3;
//           p.bezierVertex(
//             pices[index].topLeft.x,
//              pices[index].topLeft.y,
//              pices[index].bottomRight.x,
//               pices[index].bottomRight.y,
//               pices[index].topRight.x,
//                pices[index].topRight.y);
//              }
//
//                            p.vertex(pices[0].topLeft.x, pices[0].topLeft.y);
//
//
//                            p.vertex(pices[3].bottomLeft.x, pices[3].bottomLeft.y);
//
//
//           p.endShape();
//
//           p.noFill()
//           p.strokeWeight(3)
//           p.stroke(p.color('#f1db19'))
//                  p.beginShape();
//                    p.vertex(pices[12].bottomLeft.x, pices[12].bottomLeft.y);
//                    p.bezierVertex(
//                      pices[0].topLeft.x,
//                       pices[0].topLeft.y,
//                       pices[0].topLeft.x,
//                        pices[0].topLeft.y,
//                        pices[3].bottomLeft.x,
//                         pices[3].bottomLeft.y);
//
//                    p.endShape();
//                    p.beginShape();
//                      p.vertex(pices[9].bottomLeft.x, pices[9].bottomLeft.y);
//                      p.bezierVertex(
//                        pices[0].topLeft.x,
//                         pices[0].topLeft.y,
//                         pices[0].topLeft.x,
//                          pices[0].topLeft.y,
//                          pices[3].bottomLeft.x,
//                           pices[3].bottomLeft.y);
//
//                      p.endShape();
//
//
// let x1 = pices[3].bottomLeft.x;
// let y1 = pices[3].bottomLeft.y;
// let x2 = pices[1].center.x;
//
// let y2 = pices[1].center.y;
// let x3 = pices[4].center.x;
// let y3 = pices[4].center.y;
// let x4 = pices[12].topRight.x;
// let y4 = pices[12].topRight.y;
//
//
//                        p.bezier(
//                          x1, y1,
//                         x2,
//                           y2,
//                         x3,
//                             y3,
//                            x4,
//                             y4);
//
//
//                        p.fill(255);
// let steps = bloodGroups.length+2;
// var count = 0;
// for (let i = 0; i <= steps; i++) {
//   let t = i / steps;
//   let x = p.bezierPoint(x1, x2, x3, x4, t);
//   let y = p.bezierPoint(y1, y2, y3, y4, t);
//
//
//
//   if(i>1 && i <= steps-1){
//     let b = new BloodSign(p,170,{x,y},bloodGroups[count])
//       p.fill('#f800b9')
//       p.noStroke()
//         p.stroke(p.color('#f1db19'))
//       b.makeShape()
//       p.stroke('#ffff')
//       p.strokeWeight(15)
//       b.makeArcSign()
//       p.noStroke()
//       p.fill('#ffff')
//     b.addText()
//       p.stroke(p.color('#f1db19'))
//     b.reset();
//
//     p.ellipse(x, y, 20, 20);
// count ++;
//   }
//
//
//
//
//
// }





}




    p.draw = function() {









      //p.background(0);
       //p.image(img, 90, 80);

    };
};

 new P5(sketch);
