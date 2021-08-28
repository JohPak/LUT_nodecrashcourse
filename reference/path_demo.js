const path = require('path');

// Base file name (returns path_demo.js)
console.log(path.basename(__filename));

// Directory name (/Users/johannapakkala/Projects/LUT/node crash course/reference)
console.log(path.dirname(__filename));

// File extension (.js)
console.log(path.extname(__filename));

// Create path object, prints out: 
// {
//     root: '/',
//     dir: '/Users/johannapakkala/Projects/LUT/node crash course/reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//   }
console.log(path.parse(__filename));

// Concatenate paths, eg. ../test/hello.html
// Usually removes problems with win/mac different backslashes (/\) by adding them correct automatically
// Avoid hardcoding backslashes in directory names
console.log(path.join(__dirname, 'test', 'hello.html'));