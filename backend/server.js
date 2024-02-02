const express = require("express")
const app = express()

const port = process.env.PORT || 3000;

app.get('/ping', (req,res)=>{
    res.send("pong")
})
app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})