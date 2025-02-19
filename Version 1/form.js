// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')

function form(){
    var first_Name = document.getElementById("fname").value;

    console.log(first_Name);

}
var first_Name = document.getElementById("fname").value;

console.log(first_Name);

// Data which will write in a file.
let data = "Learning how to write in a file."

// Write data in 'Output.txt' .
fs.writeFile('info.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})