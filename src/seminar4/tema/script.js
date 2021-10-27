// Implementați o funcție care face compresie RLE (Run Length Encoding)
// asupra unui fișier text
const fs = require('fs');
const fileName = 'file1.txt';

function RLE(file) {
  let text = fs.readFileSync(file).toString();
  let result = '';

  let n = text.length;
  for (let i = 0; i < n; i++) {
    let count = 1;
    while (i < n - 1 && text[i] === text[i + 1]) {
      count++;
      i++;
    }
    result += text[i];
    result += count;
  }
  return result;
}

console.log(RLE(fileName));
