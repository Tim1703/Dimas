const readline = require('readline-sync');
const process = require('process');
const Eliptic = require('./eliptic');
const Message = require('./message');
const eliptic = new Eliptic();
const message = new Message();
const mod = +readline.question('Enter mod:');
const text = readline.question('Enter your text:');
for(let i = 0;i<text.length;i++){
    if(message.getnumforletter(text[i]) == -1){
        console.error(`I'm sorry, I can't read ${text[i]}`);
        process.exit();
    }
}
const data = [];
const rP = [];
const rQ = [];
const R = [];
const a = -1;

const px = +readline.question('Enter Px:');
const py = +readline.question('Enter Py:')
const P = {
    x:px,
    y:py,
};

const qx = +readline.question('Enter Qx:');
const qy = +readline.question('Enter Qy:');
const Q = {
    x:qx,
    y:qy,
};

for(let i = 0;i<text.length;i++){
    data.push(message.getnumforletter(text[i]));
    let r = +readline.question(`Enter r${i+1}:`);
    data[i].r = r;
}

console.log(`data is ${JSON.stringify(data)}`);
for(let i = 0;i<data.length;i++){
    rP.push(eliptic.dotproduct(P.x,P.y,data[i].r,a,mod));
    rQ.push(eliptic.dotproduct(Q.x,Q.y,data[i].r,a,mod));
}

console.log('rP:');
console.log(rP);

for(let i = 0;i<data.length;i++){
    R.push(eliptic.sum(data[i].x,data[i].y,rQ[i].x,rQ[i].y,mod));
}

console.log('R:');
console.log(R);



