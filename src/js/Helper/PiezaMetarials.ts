
import {PiezaMetarialsAbs} from './abstructs/PiezaMetarialsAbs'
import {Pieza} from './Pieza'
import {PiezaEvents} from './PiezaEvents';


export class PiezaMetarials extends PiezaMetarialsAbs{


  readonly p:p5;
  private _positionFontSize:number;

protected _showPos:boolean= false;
    constructor(pieza:Pieza,p:p5){
      super()
      this.pieza = pieza;
      this.p =p;
    }

    showPos(pos:boolean,fontSize:number|0):this{
       this._showPos =pos;
       this._positionFontSize = fontSize;

       return this;
     }


make(axis:xandy):void{
  var {x,y} =axis;  var x1,x2,y1,y2;
  x1 = x-this.radius;
  x2 = x+this.radius;
  y1= y-this.radius;
  y2 = y+this.radius;


 //this.p.fill(this._color); // Use color variable 'c' as fill color
//this.p.noStroke(); // Don't draw a stroke around shapes

var color = this.p.color(this._color);
if(this._type  ==='cross'){
  this.p.stroke(color );
  this.p.line(x,y1,x,y2)
  this.p.line(x1,y,x2,y)
}else{
this.p.fill(color); // Use color variable 'c' as fill color
this.p.noStroke(); // Don't draw a stroke around shapes
    this.p.circle(axis.x,axis.y,this.radius)
}
  let defaultColor = this.p.color(this._defaultColor);
  this.p.stroke(defaultColor);

if(this._showPos){
  console.log(this._showPos)
  let e = new PiezaEvents(this.p)
  e.showIndPosition(axis.x,axis.y,this._positionFontSize);
}



}
    /**
    margin Top center
    **/
      mTC(){
      const {x,y} =  this.pieza.mTopCenter;
      this.make({x,y})


      }

      /**
      margin Bottom center
      **/
      mBC(){
        const {x,y} =  this.pieza.mBottomCenter;
        this.make({x,y})
        }
        /**
        margin Left center
        **/
       mLC(){
            const {x,y} =  this.pieza.mLeftCenter;
              this.make({x,y})
        }
        /**
        margin Right center
        **/
        mRC(){
             const {x,y} = this.pieza.mRightCenter;
               this.make({x,y})
         }

         allAngelMarginCenter(){

           this.mTC()
           this.mLC()
           this.mRC()
           this.mBC()
         }

    //-------------------------------------
         /**
          top center
         **/
         tC(){
              const {x,y} =  this.pieza.topCenter;
                  this.make({x,y})
          }
          /**
           bottom center
          **/
          bC(){
               const {x,y} =  this.pieza.bottomCenter;
                this.make({x,y})
           }
           /**
            left center
           **/
           lC(){
                const {x,y} =  this.pieza.leftCenter;
                 this.make({x,y})
            }
            /**
             right center
            **/
            rC(){
                 const {x,y} =  this.pieza.rightCenter;
                  this.make({x,y})
             }

             allAngelCenter(){

               this.tC()
               this.lC()
               this.rC()
               this.bC()

             }

             //-----------------------------------------------------
             /**
              top left
             **/
             tL(){
                  const {x,y} =  this.pieza.topLeft;
                 this.make({x,y})
              }

              /**
               top Right
              **/
              tR(){

                   const {x,y} =  this.pieza.topRight;
                    this.make({x,y})
               }

               /**
                top Right
               **/
               bL(){
                    const {x,y} =  this.pieza.bottomLeft;
                     this.make({x,y})
                }
                /**
                 top Right
                **/
                bR(){
                     const {x,y} =  this.pieza.bottomRight;
                      this.make({x,y})
                 }

        allAngel(){

          this.tL()
          this.tR()
          this.bL()
          this.bR()

        }


                 //------------------------------------
                 /**
                  top Right
                 **/
                 mTl(){
                      const {x,y} =  this.pieza.mTopLeft;
                       this.make({x,y})
                  }

                  /**
                   top Right
                  **/
                  mTr(){
                       const {x,y} =  this.pieza.mTopRight;
                        this.make({x,y})
                   }

                   /**
                    top Right
                   **/
                   mBl(){
                        const {x,y} =  this.pieza.mBottomLeft;
                       this.make({x,y})
                    }
                    /**
                     top Right
                    **/
                    mBr(){
                         const {x,y} =  this.pieza.mBottomRight;
                          this.make({x,y})
                     }

          allMarginAngle(){


            this.mTl();
            this.mTr();
            this.mBl();
            this.mBr();

          }

          all(){

            this.allAngelMarginCenter()
            this.allAngelCenter()
            this.allAngel()
            this.allMarginAngle()

          }


          //----------------------------------------




  }
