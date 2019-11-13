const http = require('http');
require('./config');

const server = http.createServer((req, res) =>{
    
    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.write('<h1>Main</h1>');
        res.end();
    }else if(url === '/login') {
            res.write('<h1>login</h1>');
            res.end();
    }
    
    
});

server.listen(process.env.PORT)