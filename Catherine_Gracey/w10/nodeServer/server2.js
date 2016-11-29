const http = require('http');
const fs = require('fs');

var about
fs.readFile('about.html', function(err, data){
  about = data.toString();
});

var app = function(req, res){
  // '/' - respond with hello world as pure text
  // '/about' - respond with text stored in an about.html file
  // '/donate' - respond with <h1>Please donate</h2>
  //  '/wdi' - respond with http status code 404 and text oops
  console.log(req.url)
  if (req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello world');
    res.end();
  } else if (req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(about);
    res.end();
  } else if (req.url === '/donate'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Please Donate</h1>');
    res.end();
  } else if (req.url === '/wdi'){
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('oops');
    res.end();
  }
}

var server = require('http').createServer(app);
server.listen(3000);
