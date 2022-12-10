import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../classes/Character/Character";
import "./JogoDaVelha.css";

const JogoDaVelha = () => {

  // criando uma tabela com 9 elementos vazios
  const tabelaVazia = Array(9).fill("");

  // criando uma tabela com React Hooks (useState = tabela vazia)
  const [tabelaJV, settabelaJV] = useState(tabelaVazia);

  // definindo o jogador que irá iniciar o jogo (useState = Espada)
  const [jogadorAtual, setjogadorAtual] = useState("Espada");

  // definindo quem é o vencedor (useState = null -> nenhum vencedor no início do jogo)
  const [winner, setWinner] = useState<string>("");

  const [hero, setHero] = useState<Hero>(
    JSON.parse(localStorage.getItem("player") ?? "{}")
  );
  useEffect(() => {
    setHero(
      (hero) => (hero = JSON.parse(localStorage.getItem("player") ?? "{}"))
    );
  }, []);

  //nome e pontuação atual
  const [jogador, setJogador] = useState({
    name: hero.name,
    score: 0,
  });

  const [gameOver, setGameOver] = useState(false);

  const [ranking, setRanking] = useState<object[]>(
    JSON.parse(localStorage.getItem("placarVelha") ?? "[]")
  );

  const marcarPonto = () => {
    setJogador({ name: jogador.name, score: jogador.score + 1 });
    console.log(jogador);
  };

  // função para clicar no elemento
  const clicar = (index: number) => {
    // verificação para delimitar o clique

    // no momento em que alguém ganha
    if (winner) {
      return null;
    }

    // quando o elemento já foi clicado anteriormente
    if (tabelaJV[index] !== "") {
      return null;
    }

    // alterando a tabela para a verificação de clique de um jogador
    settabelaJV(
      tabelaJV.map((item, itemIndex) =>
        itemIndex === index ? jogadorAtual : item
      )
    );

    // realizando o revezamento de clique entre os jogadores
    setjogadorAtual(jogadorAtual === "Espada" ? "Escudo" : "Espada");
  };

  const verificarGanhador = () => {
    const possiveisJogadas = [
      // horizontais
      [tabelaJV[0], tabelaJV[1], tabelaJV[2]],
      [tabelaJV[3], tabelaJV[4], tabelaJV[5]],
      [tabelaJV[6], tabelaJV[7], tabelaJV[8]],

      // verticais
      [tabelaJV[0], tabelaJV[3], tabelaJV[6]],
      [tabelaJV[1], tabelaJV[4], tabelaJV[7]],
      [tabelaJV[2], tabelaJV[5], tabelaJV[8]],

      // diagonais
      [tabelaJV[0], tabelaJV[4], tabelaJV[8]],
      [tabelaJV[2], tabelaJV[4], tabelaJV[6]],
    ];

    // verificando o array para descobrir o ganhador através do método every()
    possiveisJogadas.forEach((elementos) => {
      if (elementos.every((celulaJV) => celulaJV === "Escudo")) {
        setRanking((ranking) =>
          [...ranking, jogador]
            .sort((a: any, b: any) => a.score - b.score)
            .reverse()
        );
        localStorage.setItem("placarVelha", JSON.stringify(ranking));
        setWinner("Escudo");
        setGameOver(true);
        console.log(ranking);
        setJogador({ name: jogador.name, score: 0 });
        return; 
      }
      if (elementos.every((celulaJV) => celulaJV === "Espada")) {
        marcarPonto();
        setWinner("Espada");
      }
    });


    
    // caso não haja ganhador, verifica empate
    deuEmpate();
  };

  // chamando outro elemento do React Hooks (useEffect) para verificar o ganhador da jogada
  useEffect(verificarGanhador, [tabelaJV]);

  // verificando se deu empate no jogo
  const deuEmpate = () => {
    if (tabelaJV.every((item) => item !== "") || !{ winner }) {
      setWinner("E");
      setJogador({ name: jogador.name, score: 0 });
      if (gameOver) {
        setRanking((ranking) =>
          [...ranking, jogador]
            .sort((a: any, b: any) => a.score - b.score)
            .reverse()
        );
        localStorage.setItem("placarVelha", JSON.stringify(ranking));
        setGameOver(false);
        return;
      }
    }
  };

  // resetando o jogo
  const resetaJogo = () => {
    setjogadorAtual("Espada");
    settabelaJV(tabelaVazia);
    setWinner("");
    if (gameOver) {
      setRanking((ranking) =>
        [...ranking, jogador]
          .sort((a: any, b: any) => a.score - b.score)
          .reverse()
      );
      localStorage.setItem("placarVelha", JSON.stringify(ranking));
    }
    setGameOver(false);
    return;
  };

  const sair = () => {
    setRanking((ranking) =>
      [...ranking, jogador]
        .sort((a: any, b: any) => a.score - b.score)
        .reverse()
    );
    localStorage.setItem("placarVelha", JSON.stringify(ranking));
  };

  return (
    <div className="jogoDaVelhaMain">
      <h1 className="title">TIC</h1>
      <h1 className="title">TAC</h1>
      <h1 className="title">TOE</h1>

      <div className={`tabelaJV ${winner ? "game-over" : ""}`}>
        {tabelaJV.map((item, index) => (
          <div
            key={index}
            className={`celulaJV ${item}`}
            onClick={() => clicar(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner && (
        <div className="modal-jv">
          <div className="modal-jv-content">
            {winner === "Escudo" || winner === "E" ? (
              <div className="mostraPlacar">
                <div className="modalGameOver">
                  <br />
                  <br />
                  <h2 id="gameOver">Game Over!</h2>
                  <br />
                  <p className="placar-derrota-jv">
                    Mas não desanime! Um verdadeiro guerreiro nunca desiste da
                    luta!
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            ) : (
              <div className="mostraPlacar2">
                <div className="modalWinner">
                  <br />
                  <br />
                  <h2 id="winner">Parabéns! Você ganhou!</h2>
                  <br />
                  <h3 className="h3-jv">Sua Pontuação:</h3>
                  <div className="placar-jv">{jogador.score}</div>
                </div>
              </div>
            )}
            <div className="buttons-jv">
              {gameOver && <Link to={"/map"}>
                <button className="button-jv" id="sair" onClick={sair}>
                  Sair
                </button>
              </Link>}
              <button onClick={resetaJogo} className="button-jv">
                Recomeçar jogo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JogoDaVelha;
