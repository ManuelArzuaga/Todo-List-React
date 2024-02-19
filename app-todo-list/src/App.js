import './App.css';
import {Route,Routes} from "react-router-dom"
import Index from "./Componentes/Index"
import Actualizar from "./Componentes/Actualizar"
import Post from "./Componentes/Post"
import Delete from "./Componentes/Delete"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/actualizar" element={<Actualizar></Actualizar>}></Route>
        <Route path="/delete" element={<Delete></Delete>}></Route>
        <Route path="/post" element={<Post></Post>}></Route>
      </Routes>
      
   
  );
}

export default App;
