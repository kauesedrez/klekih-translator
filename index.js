console.log("Klekih Translator \n\n");

const fs = require("fs");
const path = require("path");
let matrix = [];

//

let difference = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));

fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach(file => {
      if (path.extname(file) == ".json") {
        //

        try {
          const data = fs.readFileSync(
            path.join(__dirname, file),
            "utf8"
          );
          matrix[file] = Object.keys(JSON.parse(data));
        } catch (err) {
          console.error(err);
        }
      }
    });

    compare(matrix);
  }
});

function compare(matrix) {
  console.log("Differences:\n\n");

  let keys = Object.keys(matrix);

  console.log(
    `diff ${keys[1]}=> `,
    difference(matrix[keys[0]], matrix[keys[1]])
  );
  console.log(
    `diff ${keys[0]}=> `,
    difference(matrix[keys[1]], matrix[keys[0]])
  );
}
