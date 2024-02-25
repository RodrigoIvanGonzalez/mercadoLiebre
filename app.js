const express = require('express');
const app = express();

const path = require ('path')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"/view/home.html"))
})

app.listen(3030, ()=>{console.log("hola")})

app.get("/login.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./view/login.html"))
})

app.post("/login.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./view/home.html"))
})

app.get("/register.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./view/register.html"))
})

app.post("/register.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./view/home.html"))
})
