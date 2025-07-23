const express =  require('express')
const app = express()
const UserRouter = require('./routes/users.route')



app.use("/api/user",UserRouter)

app.use("/register",(req,res)=>{
    res.statusCode = 200,
    res.sendFile(__dirname + "/views/Resgister.html")
})
app.use("/login",(req,res)=>{
    
    // res.cookie("name", "shnato");
    res.clearCookie('name')
    res.append("id", "01247")
    res.end()
})


app.use('/', (req, res)=>{
    res.statusCode = 200,
    res.sendFile(__dirname + "/views/index.html")
})

app.use((req, res)=>{
    res.send('<h1>404 page not a valid URL</h1>')
})

module.exports = app