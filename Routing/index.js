const http = require('http')
const fs = require('fs')
const port = 3000;
const hostname = '127.0.0.1'




const server = http.createServer((req, res) => {

    const handleReadFile = (status, FileLocation ) => {
        fs.readFile( FileLocation , (err, data)=>{
            res.writeHead(status,{'content-type':"text/html"})
            res.write(data)
            res.end()
        })
    }


    if(req.url === '/'){
        handleReadFile(202, 'index.html')
    }
    else if(req.url === '/about'){
        handleReadFile(202, 'About.html')
    } 
    
    else if(req.url === '/blog'){
        handleReadFile(202, 'Blog.html')
    } 
    else {
        handleReadFile(404, 'Error.html')
    } 
    
})


server.listen(port, hostname, ()=>{
    console.log(`server is running at http://${hostname}:${port}`);
    
})