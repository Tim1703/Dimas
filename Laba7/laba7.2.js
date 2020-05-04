const Eliptic = require('./eliptic');
const eliptic = new Eliptic();
const readline = require('readline-sync');

const a = -1;
const px = + readline.question(`Enter px : `);
const py = + readline.question(`Enter py : `);
const r = + readline.question(`Enter r : `);

console.log(eliptic.dotproduct(px,py,r,a,751));