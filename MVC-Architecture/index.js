


const express = require('express')

const app = express()
app.use(express.urlencoded())

const PORT = 3000



// ######################## external import

// ###### import router start

const Router = require('./Routes/user.route')

// ### for access 
app.use(Router)

// ###### import router end 




app.use((req, res, next)=>{

    res.status(404).json({
        massage:"404 page not found"
    })

})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})