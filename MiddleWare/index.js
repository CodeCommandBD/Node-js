const express = require('express')

const app = express()

const port = 3000

const myMiddle = (req, res, next) => {
    
    req.current = new Date(Date.now())
    next()
}

app.use(myMiddle)

app.get('/', (req, res)=>{
    res.send('hello' + req.current)
    
})
app.get('/about', (req, res)=>{
    res.send('hello' + req.current)
    
})


app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`);
    
})