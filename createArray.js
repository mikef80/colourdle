const returnRandomColour = () => {
    const r = Math.floor(Math.random() * 256).toString().padStart(3,0);
    const g = Math.floor(Math.random() * 256).toString().padStart(3,0);
    const b = Math.floor(Math.random() * 256).toString().padStart(3,0);

    // return [r,g,b];
    return `${r}${g}${b}`;
}

let array = [];

for (let i = 0; i < 365; i++) {
    array.push(returnRandomColour());
}

let array2 = JSON.stringify(array);


/* export {array2}; */
// console.log(array);

fs = require('fs');
fs.writeFile('./colourdleArray.txt', array2, function (err) {
    if (err) return console.log(err);
    console.log('createArray.js > colourdleArray.txt');
  });
