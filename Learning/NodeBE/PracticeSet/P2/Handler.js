const sumRequestHandler = require('./sum');



const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Welcome to the calculator</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Here to the calculator</h1>
        <form action="/calculate-result" method = "POST">
        <input type= "text" placeholder="First number" name="first"/>
        <input type= "text" placeholder="Second number" name="second"/>
        <input type="submit" value = "sum">
        </form>
      </body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>Error</title></head>
    <body>
      <h1>404 Page does not Exist</h1>
      <a href="/">Go to Home</a>
    </body>
    </html>
  `);
  return res.end();
};

module.exports = requestHandler;