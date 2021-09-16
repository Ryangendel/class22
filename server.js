const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

function bulldog(req, res, next){
    console.log("YOU HIT THE BULLDOG FUNCTION MIDDLEWARE")
    // req.authorized = true
    next()
}

app.use(bulldog)

app.get("/", bulldog, bulldog, bulldog, (req, res)=>{
    // console.log(req)
    if(req.authorized){
        res.send("helllooo authorized user")
    }else{
        res.send("cant touch this")
    }
    
})

app.get("/add", (req, res)=>{
    // console.log(req)
    console.log("YOU HIT THE ADD ROUTE")
    res.send("helllooo")
})

app.listen(PORT, ()=>{
    console.log("Listening on port "+PORT)
})