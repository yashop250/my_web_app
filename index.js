// Simple Node.js HTTP server (plain JavaScript)

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  
  // Route: Home page
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hello from Node.js plain server!\n');
  }

  // NEW ROUTE: /auth
  if (req.url === "/auth") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('This is the authentication route\n');
  }

  // 404 for any other route
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
