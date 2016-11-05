

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    var pathName = url.parse(request.url).pathname;
    console.log('pathname=',pathName);// Use console.log to just see what's going on with the url
    
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */
    console.log('filename=',fileName);// Use console.log to just see what's going on with the file
var fileNameComplete = fileName + '.json';

    if (pathName === '/index'){
        fileNameComplete = fileName + '.html'; 
    } 
    /* lets try to read the html page found */
    fileSystem.readFile(fileNameComplete , callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header 
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html 
             */
            response.writeHead(400, {'Content-Type': 'text/html'});  //writes out in html 
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            if (pathName === '/index'){
             response.writeHead(200, {'Content-Type': 'text/html'});   
            } else{
            response.writeHead(200, {'Content-Type': 'application/json'}); 
               
            }
            response.write(data.toString());
        }     
        
        /* the response is complete */
        response.end();
    }

   
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');
