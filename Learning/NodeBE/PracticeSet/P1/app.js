const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/home'){
    res.write('<h1>Welcome to Home</h2>');
    return res.end();
  }
  else if(req.url === '/about'){
    res.write('<h1>Welcome to About</h2>');
    return res.end();
  }
  else if(req.url === '/contact'){
    res.write('<h1>Welcome to Contact</h2>');
    return res.end();
  }
  else if(req.url === '/blogs'){
    res.write('<h1>Welcome to Blogs</h2>');
    return res.end();
  }
  else if(req.url === '/post'){
    res.write('<h1>Welcome to Home</h2>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');

  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rishav</title>
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/post">Post</a></li>
          </ul>
        </nav>
      </header>
    </body>
    </html>
  `);
  
  res.end();
});

server.listen(3001, () => {
  console.log('Server running on address http://localhost:3001');
});
