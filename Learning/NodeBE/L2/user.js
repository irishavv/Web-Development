
const fs = require('fs');

const requestHandler = (req, res) => {
  // console.log(req);
  // process.exit();  //stop event loop
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html'); // Set header here for HTML response
    res.write('<html>');
    res.write('<head><title>Form Page</title></head>');
    res.write('<body><h1>Enter Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');

    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/rishav') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Rishav Kumar , I am a student</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const formData = new URLSearchParams(parsedBody);
      const name = formData.get('name');
      const gender = formData.get('gender');
      // const bodyObject = Object.fromEntries(formData);
      // console.log(bodyObject)

      // Save data to file
      fs.writeFileSync('user.txt', `Name: ${name}, Gender: ${gender}`);

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();  // Important to end the response
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Nothing</h1></body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;