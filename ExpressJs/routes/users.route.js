const express =  require('express')
const router = express.Router();



router.get('/register', (req, res)=>{
    res.send('register route')
})
router.get('/login', (req, res)=>{
    res.send('login route')
})


module.exports = router