const express = require("express")
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path");//se usa para mandar un archivo desde el backend con express en el get


mongoose.connect("mongodb://localhost:27017/Test2")
.then(()=>{
  console.log("conectado")
})

//app.use(express.static("public")) //usa el archivo que esta en public

app.use(express.json())
app.use(bodyparser.json())

app.listen(port,()=>{
  console.log("server running")
})

let esquema = mongoose.Schema({ //se establece el esquema
  title:String,
  description:String

  
})
const model = mongoose.model("Test2",esquema); //se usa para crear, eliminar,actualizar y leer

//post tarea
app.post("/post",(req,res)=>{
  res.status = 200
  res.send({status:"recieved"})
  const newesquema = new model({//creo un nuevo esquema
    title:req.body.title,//se le asigna el req.body.titulo al nombre del esquema
    description:req.body.description
  })

  newesquema.save() //se guarda el esquema en la db
    .then(()=>{
     console.log("guardado")
    })
    .catch((err) =>{
    console.log(err)
    })
})

//eliminar tarea

app.delete("/delete",(req,res)=>{
  res.status=200,
  res.send({status:"deleted"})
  model.deleteOne(req.body.title) //elimina por edad
.then(()=>{
  console.log("eliminado")
})
.catch((err)=>{
  console.log(err)
})
})

//actualizar tarea

app.patch("/actualizar",(req,res)=>{
  res.status=200,
  res.send({status:"patched"})
  model.findOneAndUpdate({title:req.body.title},{description:req.body.description}) //actualiza la edad buscando por el nombre, primera parte quien actualizar segunda parte que se actualiza
.then(()=>{
  console.log("actualizado")
})
.catch((err)=>{
  console.log(err)
})
})

//mostrar elementos

app.get("/datos",(req,res)=>{
  res.status=200
  // res.send({status:"received"})
  model.find() //lee un elemento
.then((users) =>{//devuelve un array de objetos
  // res.send(users)
  res.sendFile(path.join(__dirname,"/public/Tareas.html")) //envia como respuesta un archivo html
  
})
.catch((err) =>{
  console.log(err)
})
})

app.get("/datos1",(req,res)=>{
  res.status=200
  // res.send({status:"received"})
  model.find() //lee un elemento
.then((users) =>{//devuelve un array de objetos
  res.send(users)
  //res.sendFile(path.join(__dirname,"/public/Tareas.html")) //envia como respuesta un archivo html
  
})
.catch((err) =>{
  console.log(err)
})
})