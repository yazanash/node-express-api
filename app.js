const express = require("express")

const app =express();


app.get("/",(req,res)=>{
    res.send("Hello World from express js")
})

app.get("/hello",(req,res)=>{
    res.send("Hello World from express js")
})

app.get("/home",(req,res)=>{
    res.send("Welcome from home")
})
 
app.listen(3000,()=>{
    console.log("app started on prot 3000")
})