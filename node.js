const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<h1> hello my self ayush </h1>");
    res.end();
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
