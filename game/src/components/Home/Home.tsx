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
            <abbr title="Tic-Tac-Toe"><div className="jv" onClick={() => setGame(2)}></div></abbr>
            <abbr title="Skins"><div className="guarda_roupa" onClick={() => setGame(4)}></div></abbr>
            <abbr title="Lights Out"><div className="lightsOut" onClick={() => setGame(5)}></div></abbr>
          </C.Map>
        </C.Container>
        {game !== 0 && (
          <Modal hero={hero}
            titles={
              game === 2
                ? { title: "T I C  -  T A C -  T O E", sub: "Medieval" }
                : game === 3
                ? { title: "W R I T E - O R - D I E", sub: "" }
                : game === 4
                ? { title: "SKINS - AND - RULES", sub: "" }
                : { title: "L  I  G  H  T  S  - O  U  T", sub: "Future" }
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
