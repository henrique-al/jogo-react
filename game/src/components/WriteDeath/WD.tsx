import { useCallback, useEffect, useState } from "react";
import { Hero } from "../../classes/Character/Character";
import { Enemy } from "./classes/Enemies/Enemy";
import { Clock } from "./classes/Enemies/extends/Clock";
import { Skeleton } from "./classes/Enemies/extends/Skeleton";

import './wd.css'

import * as C from "./style";
import { ranking } from "./types/Ranking";


const WriteDeath = () => {
  const [enemiesState, setEnemiesState] = useState<Enemy[]>(Enemy.getEnemies()); 
  const [enemiesLetters, setEnemiesLetters] = useState<string[]>([]);
  const [killCount, setKillCount] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [ranking, setRanking] = useState<ranking[]>(
    JSON.parse(localStorage.getItem("placarWD") || "[]")
  );
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [contSeg, setContSeg] = useState(5)
  const heroLC: Hero = JSON.parse(localStorage.getItem('player') ?? '{}')
  const src: string = heroLC.img.includes('medieval')? 'medievalGrande':heroLC.img.includes('futurista')? 'robocopGrande':heroLC.img.includes('mcfly')? 'mcflyGrande':'dinossauroGrande'
  const hero = new Hero(heroLC.name, 5, src);

  useEffect(() => {
    localStorage.setItem("placarWD", JSON.stringify(ranking));
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code.includes("Key") && !e.ctrlKey) {
      const enemies: Enemy[] = Enemy.getEnemies();
      const key = e.code.replace("Key", "").toLowerCase();
        if (enemies[enemies.length -1].getLetters().includes(key)) {
          setEnemiesLetters([...enemies[enemies.length -1].getLetters()]);
          if (enemies[enemies.length -1].removeLetter(key)) {
            setKillCount((killCount) => killCount + 1);
          }
          setEnemiesState(Enemy.getEnemies());
        } else{
          hero.setLife(hero.getLife() - 1)
          setContSeg((cont) => cont-1)
          if (hero.getLife() === 0) {
            killHero()
            return
          }
        }
    }
  }, []);

  const handleClick = () => {
    window.location.reload()
    window.location.replace('http://localhost:3000/map')
  }

  useEffect(() => {
    if (!gameOver) window.addEventListener("keydown", handleKeyDown);
    else window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver, handleKeyDown]);

  

  const createEnemies = () => {
    if (
      enemiesState[enemiesState.length - 1]?.getDistance() > hero.getDistance()
    ) {
      return;
    }
    const randomClass: number = Math.floor(Math.random() * 2);
    const enemy: Enemy = randomClass === 0 ? new Clock(level) : new Skeleton(level);
    Enemy.addEnemies(enemy);
    setEnemiesState([...Enemy.getEnemies()]);
    setEnemiesLetters([...enemy.getLetters()]);
  };

  useEffect(() => {
    const enemies = Enemy.getEnemies();
    const idEnemies = setInterval(() => {
      if (
        enemiesState[enemiesState.length - 1]?.getDistance() + 110 >
        hero.getDistance()
      ) {
        hero.setLife(hero.getLife() - 1);
        setContSeg((cont) => cont-1)
        if (hero.getLife() === 0) {
          killHero();
          return;
        }
        return;
      }
      createEnemies();
      for (let i = 0; i < enemies.length; i++) {
        enemies[i].setDistance(60);
      }
    }, 800);
    return () => {
      clearInterval(idEnemies);
    };
  }, [enemiesState]);

  useEffect(() => {
    if (killCount % 10 === 0 && killCount !== 0) {
      setLevel((level) => level + 1);
    }
  }, [killCount]);

  const killHero = () => {
    const pos: ranking = { name: hero.name, score: killCount };
    ranking.push(pos);
    setRanking([...ranking.sort((a, b) => a.score - b.score).reverse()]);
    if (ranking !== JSON.parse(localStorage.getItem("placarWD") ?? "[]")) {
      localStorage.setItem("placarWD", JSON.stringify(ranking));
    }
    setGameOver(true);
    return;
  };

  return (
    <>
      {gameOver && <div className="modalWDContainer">
        <div className="modal-WD">
          <h1>Game Over</h1>
          <span>
            <p>Chegou ao nível {level}</p>
            <p>Você matou: {killCount}</p>
          </span>
          <div className="buttons-wd">
            <button onClick={() => handleClick()}>Voltar ao mapa</button>
          </div>
        </div>
        </div>}
      <div className="game__wd">
        {enemiesState.map((enemy, i) => (
          <C.Enemy
            key={i}
            pos="left"
            src={enemy.img}
            distance={enemy.getDistance()}
            fly={enemy.getFly()}
          >
            <C.EnemyLetter>
              <span>{enemy.myToString().toUpperCase()}</span>
            </C.EnemyLetter>
          </C.Enemy>
        ))}
        <C.life>{contSeg < 0? 0:contSeg}</C.life>
        <C.Personagem
          src={hero.img}
          className="personagem"
          distance={hero.getDistance()}
        ></C.Personagem>
      </div>
    </>
  );
}

export default WriteDeath;