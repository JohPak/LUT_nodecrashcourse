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
    // // If url requested is plain /, we now it's the index-page
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {

    //         // check for errors
    //         if (err) throw err;
    //         // Send headers. 200 = OK
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    
    //         // load a file to show in browser
    //         res.end(content);
    //     })

    // }
    // // If url requested is /about, we now it's the index-page
    // if (req.url === '/api/users') {
    //     // array of objects
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 35}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     // turn array of objects into json content.
    //     // Prints webpage with text:
    //     // [{"name":"Bob Smith","age":40},{"name":"John Doe","age":35}]
    //     res.end(JSON.stringify(users));
    // }

    // make dynamic filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html'

    // check the extension and set content type accordingly
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        //if there is error..
        if (err) {
            // ...check if page is not found
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');

                })
            }
            else {
                // If error is not ENOENT, then it must be some server error
                res.writeHead(500);
                res.end(`Server error ${err.code}`)
            }
        
        }
        else {
            // No error, success!
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
    
});

// use whatever dynamic port number host is deciding. If not found, then use 5000.
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
