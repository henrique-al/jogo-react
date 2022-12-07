import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Character } from "../Character/index";
import { useCharacter } from "../../hooks/useCharacter";
import { Hero } from "../../classes/Character/Character";
import "./Home.css";
import Modal from "../Modal/Modal";

// type Props = {
//   hero: Hero;
// };
const Home = (/*{ hero }: Props*/) => {
  const char = useCharacter();
  const [game, setGame] = useState<number>(0);
  const [hero, setHero] = useState<Hero>(JSON.parse(localStorage.getItem('player') ?? '{}'))
  useEffect(() => {
    setHero((hero) => hero = JSON.parse(localStorage.getItem('player') ?? '{}'))
  }, [])

  return (
    <>
      <div className="COBRETUDO">
        <C.Container>
          <C.Map>
            <abbr title="Write or die"><div className="wd" onClick={() => setGame(3)}></div></abbr>
            <abbr title="TIC-TAC-TOE"><div className="jv" onClick={() => setGame(2)}></div></abbr>
            <abbr title="Skins"><div className="guarda_roupa" onClick={() => setGame(4)}></div></abbr>
            <div className="fechar" onClick={() => setGame(1)}></div>
          </C.Map>
        </C.Container>
        {game !== 0 && (
          <Modal hero={hero}
            titles={
              game === 2
                ? { title: "TIC-TAC-TOE", sub: "Medieval" }
                : game === 3
                ? { title: "WRITE OR DIE", sub: "Tempo" }
                : game === 4
                ? { title: "SKINS", sub: "" }
                : { title: "SAIR", sub: "" }
            }
            game={game}
          />
        )}
        <Character side={char.side} src={hero.img} />
      </div>
    </>
  );
};

export default Home;
