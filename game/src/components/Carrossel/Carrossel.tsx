import React, { useState } from "react";
import { Hero } from "../../classes/Character/Character";

import "./Carrossel.css";

type Props = {
  hero: Hero;
};

const imgs: { src: string; name: string }[] = [
  { src: "/assets/carrossel/1.png", name: "Marty McFly" },
  { src: "/assets/carrossel/2.png", name: "Dinossauro" },
  { src: "/assets/carrossel/3.png", name: "Robocop" },
  { src: "/assets/carrossel/4.png", name: "Cavaleiro" },
];

const Carrossel = ({ hero }: Props) => {
  const [src, setSrc] = useState<number>(0);

  const handleClick = () => {
    hero.img =
      imgs[src].name === "Marty McFly"
        ? "/assets/mcfly.png"
        : imgs[src].name === "Robocop"
        ? "/assets/futurista.png"
        : imgs[src].name === "Dinossauro"
        ? "/assets/dinossauro.png"
        : "/assets/medieval.png";
    localStorage.setItem("player", JSON.stringify(hero));
    window.location.reload()
  };

  return (
    <>
      <div className="carrossel"> 
        <img
          src="/assets/carrossel/Flecha-esquerda.png"
          alt=""
          onClick={() => setSrc((src) => (src === 0 ? src : src - 1))}
          className="arrow-carrossel"
        />
        <div className="inner">
          <div className="item">
            <img src={imgs[src].src} alt="" />
            <p className="nome-carrossel">{imgs[src].name}</p>
          </div>
        </div>

        <img
          src="/assets/carrossel/Flecha-direita.png"
          alt=""
          onClick={() =>
            setSrc((src) => (src === imgs.length - 1 ? src : src + 1))
          }
          className="arrow-carrossel"
        />
      </div>
      <button className="trocar-skin" onClick={() => handleClick()}>
        Trocar Skin!
      </button>
    </>
  );
};

export default Carrossel;
