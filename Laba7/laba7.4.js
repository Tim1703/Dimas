const readline = require('readline-sync');
const Eliptic = require('./eliptic');
const Message = require('./message');
const eliptic = new Eliptic();
const message =  new Message();
const mod = +readline.question('Enter mod:');
const key = +readline.question('Enter your secret key:');
const a = -1;
const data = [];
const keyrP = [];
const text = [];
const count = +readline.question('Enter count of your cryptograms:');

for(let i = 0;i<count;i++){
    const rPx = +readline.question(`Enter rPx${i+1}:`);
    const rPy = +readline.question(`Enter rPy${i+1}:`);
    const Rx = +readline.question(`Enter Rx${i+1}:`);
    const Ry = +readline.question(`Enter Ry${i+1}:`);
    const cryptograms = {
        rP:{
            x:rPx,
            y:rPy,
        },
        R:{
            x:Rx,
            y:Ry,
        }
    };
    data.push(cryptograms);
}
console.log(data);

for(let i = 0;i<data.length;i++){
    keyrP.push(eliptic.dotproduct(data[i].rP.x,data[i].rP.y,key,a,mod));
}
console.log(keyrP);
for(let i = 0;i<data.length;i++){
    text.push(eliptic.sum(data[i].R.x,data[i].R.y,keyrP[i].x,-keyrP[i].y,mod));
}
console.log(text);
let str = '';
for(let i = 0;i<text.length;i++){
    str+= message.getletterfornumber(text[i]);
}
console.log(`Your message is ${str}`);



