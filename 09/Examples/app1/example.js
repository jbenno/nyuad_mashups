const fs = require('fs');
//console.log('started');
const data = fs.readFileSync('./example.txt');

//console.log('completed');

const data2=fs.readFile('./example.txt', (err, data0) =>{
    console.log('finished');
});

console.log('started');