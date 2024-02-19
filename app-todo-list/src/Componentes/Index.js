import react from "react";

function index (){

  function mostrarDatos(){
    
    async function MostrarTareas(event){  //uso async y await para el get
      event.preventDefault()
      const res =  await fetch("/datos1") //para el get necesito otra direccion de api diferente
      const data = await res.json()
      document.getElementById("tarjeta").innerHTML = ""
      for(let i=0;i<data.length;i++){
        const texto = document.createElement("texto")
        const descripcion = document.createElement("descripcion")
        texto.innerHTML = `titulo: ${data[i].title}`
        descripcion.innerHTML = ` descripcion: ${data[i].description} <br>`//muestra el dato y hace un salto de linea
        document.getElementById("tarjeta").appendChild(texto)
        document.getElementById("tarjeta").appendChild(descripcion)
      }
    }
    
  }

  return(
    
   
  )
}

export default index;
