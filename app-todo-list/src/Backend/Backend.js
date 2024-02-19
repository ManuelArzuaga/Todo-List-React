const express = require("express")
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path");//se usa para mandar un archivo desde el backend con express en el get
const cors = require("cors") //se tiene que instalar cors con npm install cors

app.use(express.json())
app.use(bodyparser.json())
app.use(cors) //se usa cors

app.listen(port,()=>{
  console.log("server running")
})

app.get("/",(req,res)=>{
  
  res.json({status:"received"})
   //lee un elemento
  })

