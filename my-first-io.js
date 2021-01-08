const fs = require("fs");

var x = process.argv[2];

console.log(fs.readFileSync(x).toString().split("\n").length - 1);
