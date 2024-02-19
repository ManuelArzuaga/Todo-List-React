import react from "react";
import {useEffect,useState} from "react"

function Index (){

  const [datos,setDatos] = useState();
  
    
  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:4000/datos')
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
      });
  }, []);

  console.log(datos)
    

  return(
    
    <div id="tarjeta" >
      {/* {datos} */}
    </div>
  
   
  )
}

export default Index;
