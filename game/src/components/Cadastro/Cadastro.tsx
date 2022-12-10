import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../classes/Character/Character";
import Home from "../Home/Home";
import "./Cadastro.css";

const Cadastro = () => {
  const [name, setName] = useState<string>('');

  const handleClick = (): void => {
    localStorage.setItem("player", JSON.stringify(new Hero(name, 5, 'mcfly')));
  };

  const handleChange = (v: string): void => {
    setName((name) => name=v)
  };
  return (
    <div className="cadastro">
      <div className="modal-cadastro">
        <h1 className="gradient title-cadastro">Play or Die</h1>
        <div className="container">
          <h3 className="cadastro">Nickname: </h3>
          <input
            type="text"
            placeholder="Ex.: heroi123"
            value={name}
            onChange={(e) => handleChange(e.target.value)}
            className="cadastro"
          />
          <br />
          <br />
          <Link to={`${name !== ''? '/map':'/'}`} className="link">
            <button type="submit" onClick={() => handleClick()} className="cadastro">
              Ir para o Jogo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
