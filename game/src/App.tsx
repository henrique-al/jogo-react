
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './classes/Character/Character';
import Cadastro from './components/Cadastro/Cadastro';
import Carrossel from './components/Carrossel/Carrossel';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import JogoDaVelha from './components/JogoVelha/JV';
import Modal from './components/Modal/Modal';
import WriteDeath from './components/WriteDeath/WD';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cadastro/>}/>
          <Route path='/map' element={<Home />}/>
          <Route path='/wd' element={<WriteDeath />}/>
          <Route path='/jv' element={<JogoDaVelha />}/>
          <Route path='/help' element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
