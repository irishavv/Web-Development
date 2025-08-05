const http = require('http');


/*
function requestListner(req, res){   // first name will be for request and second name will be response
  console.log(req);
}

http.createServer(requestListner);

// this is old way to write new way is below


http.createServer((req, res) => {
  console.log(req);
}); 

*/

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

