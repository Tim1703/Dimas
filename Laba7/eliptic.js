const Eyler = require('./eyler');
const eyler = new Eyler();
class Eliptic{
    constructor(a,b){
        console.log(a,b);
    }

    sum(x1,y1,x2,y2,mod){
        let lam = ((y2-y1)*eyler.getreverse((x2-x1),mod))%mod;
        if(lam<0){
            lam+=mod;
        }
        let x3 = (Math.pow(lam,2)-x1-x2)%mod;
        if(x3<0){
            x3+=mod;
        }
        let y3 = (lam*(x1-x3)-y1)%mod;
        if(y3<0){
            y3+=mod;
        }

        const sumofdot = {
            x: x3,
            y: y3,
        };

        return sumofdot;
    }

    multiply(x1,y1,a,mod){
        let lam = ((3*Math.pow(x1,2)+a)*eyler.getreverse(2*y1,mod))%mod;
        if(lam<0){
            lam+=mod;
        }
        let x3 = (Math.pow(lam,2)-2*x1)%mod;
        if(x3<0){
            x3+=mod;
        }
        let y3 = ((lam*x1)-(lam*x3)-y1)%mod;
        if(y3<0){
            y3+=mod;
        }

        const multydot = {
            x: x3,
            y: y3,
        };

        return multydot;
    }

    dotproduct(x1,y1,r,a,mod){
       const product = [];
       const dots = [];
       let dotsproduct;
       let bin = parseInt(r).toString(2);
       for(let i = 0;i<bin.length;i++){
           if(bin[i] == '1'){
               product.push(Math.pow(2,bin.length-1-i));
           }
       }

       for(let i = 0;i<product.length;i++){
        let dot = {
            x: x1,
            y: y1,
        };
           if((product[i]%2) == 0){
               while((product[i]%2) == 0){
                   product[i]/=2;
                   dot = this.multiply(dot.x,dot.y,a,mod);
                   dots[i] = dot;
               }
           }
           if((product[i]%2) == 1){
               dots[i] = dot;
           }
       }
       for(let i = 0;i<dots.length-1;i++){
           dots[i+1] = this.sum(dots[i].x,dots[i].y,dots[i+1].x,dots[i+1].y,mod);
       }
       dotsproduct = dots[dots.length-1];
       return dotsproduct;
    }
}
module.exports = Eliptic;