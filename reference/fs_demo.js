const fs = require('fs');
const path = require('path');

// Create folder
// instead of {} you can put options, but if no need, then use empty object {}
// last part is callback function
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created...");
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello there', err => {
//     if(err) throw err;
//     console.log("File written to...");
    
//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Woohoo', err => {
//         if(err) throw err;
//         console.log("File written to...");
//     })
// })

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed..');
})
