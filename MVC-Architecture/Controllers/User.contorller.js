// ##############################
// ##############################
// ##############################

// #### use path for display view 
const path = require('path')

// ### import from model 
const jsonData = require("../models/User.model")


exports.getUser = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../Views/index.html'))
}

exports.postUser = (req, res)=>{
    const name = req.body.name
    const age = Number(req.body.age)
    const userJson = {
        name,
        age
    }
    jsonData.push(userJson)
    res.status(202).json({
        success:true,
        jsonData
    })
}