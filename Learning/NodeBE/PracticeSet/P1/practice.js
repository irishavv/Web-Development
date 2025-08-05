const http = require('http');

const renderPage = (title, sectionText) => {
  return `
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .navbar {
            background-color: #f50057;
            padding: 1rem;
            display: flex;
            justify-content: space-around;
            color: white;
          }
          .navbar a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }
          .content {
            padding: 2rem;
            text-align: center;
            font-size: 24px;
          }
        </style>
      </head>
      <body>
        <div class="navbar">
          <a href="/">Home</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/cart">Cart</a>
        </div>
        <div class="content">
          Welcome to ${sectionText} Section
        </div>
      </body>
    </html>
  `;
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  switch (req.url.toLowerCase()) {
    case '/':
      res.write(renderPage('Home', 'Home'));
      break;
    case '/men':
      res.write(renderPage('Men', 'Men'));
      break;
    case '/women':
      res.write(renderPage('Women', 'Women'));
      break;
    case '/kids':
      res.write(renderPage('Kids', 'Kids'));
      break;
    case '/cart':
      res.write(renderPage('Cart', 'Cart'));
      break;
    default:
      res.statusCode = 404;
      res.write('<h1>404 - Page Not Found</h1>');
  }
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
