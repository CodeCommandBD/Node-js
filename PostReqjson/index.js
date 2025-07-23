const express =  require('express')
const app = express();


const port = 3001
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded())

app.use(bodyParser.json())


app.get('/register',(req, res)=>{
  res.sendFile(__dirname + '/index.html')
})


app.post( '/register', (req, res) => {
  const fullname = req.body.name
  const age = req.body.age
  res.send(`your fullName is ${fullname}, and your age is ${age}`)

})







app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`);
    
})