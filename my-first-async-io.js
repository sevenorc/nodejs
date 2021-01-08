var fs = require("fs");

var x = process.argv[2];

fs.readFile(x, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data.toString().split("\n").length - 1);
});
