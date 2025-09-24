const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // set header
  res.setHeader("Content-Type", "text/html");
  // routing
  let path = "./view/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 301;
      res.setHeader("Location", "/about-me");
      res.end();
      break;
    default:
      path += "other.html";
      res.statusCode = 404;
  }
  // write from file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
