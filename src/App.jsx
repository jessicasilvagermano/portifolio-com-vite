import './index.css'
import {Routes, Route } from 'react-router-dom';
import HobbiesEskills from "./components/HobbiesEskills.jsx";
import Contato from "./components/Contato.jsx";
import Formacao from "./components/Formacao.jsx";
import Experiencia from "./components/Projetos.jsx";
import Home from './components/Home';


function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sobremim" element={<Home/>} />
        <Route exact path="/hobbies" element={<HobbiesEskills />} />
        <Route exact path="/formacao" element={<Formacao />} />
        <Route exact path="/experiencia" element={<Experiencia />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;