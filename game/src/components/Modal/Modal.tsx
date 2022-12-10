import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../classes/Character/Character";
import Carrossel from "../Carrossel/Carrossel";

import "./Modal.css";

type Props = {
  titles: { title: string; sub: string };
  game: number;
  hero: Hero
};

const Modal = ({ titles, game, hero }: Props) => {
  const [a, setA] = useState(game);
  const [placar, setPlacar] = useState<any[]>([{}]);
  const route = game === 3 ? "/wd" : game === 2 ? "/jv" : game===5?'/lo':'/map';

  const handleClick = () => {
    setA((a) => (a = 0));
    window.location.replace("http://localhost:3000/map");
  };

  const handleExit = () => {
    localStorage.removeItem('player')
  }

  useEffect(() => {
    setPlacar(
      JSON.parse(
        localStorage.getItem(
          game === 2 ? "placarVelha" : game === 3 ? "placarWD" : game===5? 'placarLO':''
        ) ?? "[{}]"
      )
    );
    placar.length = 3;
  }, []);

  return (
    <>
      {a !== 0 && a !== 1 && (
        <div className="modal-jogo">
          <div className="conteudo-modal">
            <h1 className="titulo-modal">{titles.title}</h1>
            <h1 className="tituloFundo-modal">{titles.title}</h1>
            <p className="subtitulo-modal">{titles.sub}</p>
            <br />
            <br />
            <br />
            {(a !== 4) ? <>
              <div className="ranking-modal">
                <h4 className="ranking-titulo">RANKING</h4>
                <p>
                  {placar[0]?.name} - {game === 5? placar[0]?.score?.min+':'+placar[0]?.score?.seg:placar[0]?.score}
                </p>
                <div className="line"></div>
                <p>
                  {placar[1]?.name} - {game === 5? placar[1]?.score?.min+':'+placar[1]?.score?.seg:placar[1]?.score}
                </p>
                <div className="line"></div>
                <p>
                  {placar[2]?.name} - {game === 5? placar[2]?.score?.min+':'+placar[2]?.score?.seg:placar[2]?.score}
                </p>
              </div>
              <br />
              <h3 className="modal-h3">Deseja entrar no jogo?</h3>
              <Link to={route}>
                <button className="btnS btn-modal">Jogar</button>
              </Link>
              <button className="btnN btn-modal" onClick={() => handleClick()}>
                Voltar
              </button>
            </> : <div className="modal-skins"> 
              <Carrossel hero={hero} />
              <Link to={'/'}><button className="btnSair btn-modal" onClick={() => handleExit()}>Sair</button></Link>
              <Link to={'/Regras'}><button className="btnRegras btn-modal" onClick={() => handleExit()}>Regras</button></Link>
            </div>}
          </div>
        </div>
      ) }
    </>
  );
};

export default Modal;
