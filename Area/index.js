const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + "/circle.html")
})
app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + "/triangle.html")
})



app.post('/triangle', (req, res) => {
    const height = parseFloat(req.body.height);
    const base = parseFloat(req.body.base);
    const area = 0.5 * height * base;

    res.send(`triangle is ${area}`);
})

app.post('/circle',(req, res)=>{
    const radious = req.body.radious
    const area = Math.PI * radious * radious

    res.send(`Radious is ${area}`)
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
    
}
)