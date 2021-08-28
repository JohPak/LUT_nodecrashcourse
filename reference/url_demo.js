const url = require('url');

const myUrl = new URL('http://www.mywebsite.com/hello.html?id=100&status=active');

// Serialized url
console.log(myUrl.href); // http://www.mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.toString()); // same as above

// Host (root domain)
console.log(myUrl.host); // www.mywebsite.com. Includes also port if available
console.log(myUrl.hostname); // www.mywebsite.com does not get port

// Pathname
console.log(myUrl.pathname); // /hello.html

// Serialized query
console.log(myUrl.search); // ?id=100&status=active
console.log(myUrl.searchParams); // Returns object: URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params. Returns:
// id: 100
// status: active
// abc: 123
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));