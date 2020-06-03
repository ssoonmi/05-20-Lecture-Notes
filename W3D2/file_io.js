const fs = require('fs');
// console.log(fs); // see what's in the module

// console.log('Started writing to file...');
// fs.writeFile('my-first-written-file.txt', 'Hello World!', 'utf8', err => {
//   // console.log(err); // null (if no error, FALSEY!)
//   if (err) {
//     console.log(err);
//   }
//   console.log('Done writing to file!');
// });

















// fs.readFile('poem.txt', 'utf8', (err, data) => {
//   // console.log(err); // null (if no error, FALSEY!)
//   if (err) {
//     console.log(err);
//   }
//   console.log('the contents are...\n', data);
//   // const lines = data.split('\n');
//   // console.log('Lines of the poem:', lines);

//   // const badGrammar = data.split('are').join('is');
//   // console.log(badGrammar);

//   // fs.writeFile('bad_poem.txt', badGrammar, 'utf8', (err) => {
//   //   if (err) {
//   //     console.log(err);
//   //   }
//   //   console.log('Done writing to bad poem!')
//   // });
// });

const contents = fs.readFileSync("poem.txt", 'utf8');
console.log(contents);

console.log('------')


function replaceStrs(file, oldStr, newStr) {
  const resultOfReadFile = fs.readFile(file, 'utf8', (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    }
    let newData = data.split(oldStr).join(newStr);
    writeContents('new_' + file, newData);
  });
  console.log('result', resultOfReadFile);
}

function writeContents(file, data) {
  fs.writeFile(file, data, 'utf8', err => {
    if (err) {
      console.log(err);
    }
    console.log('done writing!');
  });
}

replaceStrs('poem.txt', 'roses', 'tulips');