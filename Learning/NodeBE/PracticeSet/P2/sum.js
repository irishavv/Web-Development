const sumRequestHandler = (req, res) => {
  console.log("In sum request Handler", req.url);
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    // console.log("Raw body:", bodyStr);
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params.entries());
    // console.log("Parsed object:", bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    res.setHeader('Content-Type', 'text/plain');
    res.end(`Sum is: ${result}`);

  });
}

module.exports = sumRequestHandler;