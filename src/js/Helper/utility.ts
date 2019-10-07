import collect from 'collect.js'

import * as _ from 'lodash'
export class utility {

  static percentOf(percentFor:number,percentBy:number){
    if(percentBy>100){console.error(percentBy+' is greter 100%');}
    return (percentFor/100)*percentBy;
  }
  static  boolRandom():number {
        return _.random(0, true);
    }
  static  numberRandom(min:number,max:number):number{
        return _.random(min, max);
    }

  static  half(num:number){return num/2;}

  static  double(num:number){return num*2;}

  static  numToArray(num:number):object{
        const r = [];
        for (let x = 0; x<num;x++) {

            r.push(x)
        }
        return r;
    }

    static isEven(num:number){
      return num % 2 == 0;
    }
    static isOdd(num:number){
      return num % 2 == 1;
    }





}
