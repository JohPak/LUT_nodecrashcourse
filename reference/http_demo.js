const http = require('http');

// Create server object
http.createServer((req, res) => {
    // when we get request, we write response (=output to the browser)
    res.write('Hello there!');
    res.end();

    // port 5000. Then callback to console.log
}).listen(5000, () => console.log("Server running"));