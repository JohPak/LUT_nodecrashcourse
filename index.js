// Added two scripts to run. Start is for deployment, no need for nodemon there. But the dev script is for developement purposes. To launch:
// ***********   npm run dev   ***************
//
//   "scripts": {
//     "start": "node index",
//     "dev": "nodemon index"
//   },

// VIDEO JÄI KOHTAAN 1:10

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // If url requested is plain /, we now it's the index-page
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {

            // check for errors
            if (err) throw err;
            // Send headers. 200 = OK
            res.writeHead(200, {'Content-Type': 'text/html'});
    
            // load a file to show in browser
            res.end(content);
        })

    }
    // If url requested is /about, we now it's the index-page
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {

            // check for errors
            if (err) throw err;
            // Send headers. 200 = OK
            res.writeHead(200, {'Content-Type': 'text/html'});
    
            // load a file to show in browser
            res.end(content);
        })

    }
});

// use whatever dynamic port number host is deciding. If not found, then use 5000.
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
