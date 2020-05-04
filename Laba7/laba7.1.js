const Eliptic = require('./eliptic');
const eliptic = new Eliptic();
const readline = require('readline-sync');

const a = -1;
const px = + readline.question(`Enter px : `);
const py = + readline.question(`Enter py : `);
const TwoP = eliptic.multiply(px,py,a,751);
console.log(TwoP);

// const qx = + readline.question(`Enter qx : `);
// const qy = + readline.question(`Enter qy : `);
// const r = + readline.question(`Enter r : `);
// const ThreeQ = eliptic.dotproduct(qx,qy,r,a,751);
// console.log(ThreeQ);

// const rx = + readline.question(`Enter rx : `);
// const ry = + readline.question(`Enter ry : `);

// const SumPQ = eliptic.sum(TwoP.x , TwoP.y , ThreeQ.x , ThreeQ.y , 751);
// console.log(SumPQ);

// const result = eliptic.sum(SumPQ.x , SumPQ.y , rx,-ry,751);
// console.log(`Result = `,result);