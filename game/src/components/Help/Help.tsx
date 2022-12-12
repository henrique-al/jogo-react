import React from "react";

import './Help.css'

const Help = () => {
  return (
    <div className="fundo-help">
      <div className="conteudo-help">
        <div className="wd-help">
          <h1 className="titleHelp">Write or Die</h1>
          <p>
            <ul>
              <li>O jogo é composto por quatro inimigos que se movem em direção ao jogador principal, no qual possui 5 vidas; </li>
              <li>Para que o jogador consiga fugir, ele deverá apertar nas teclas que correspondem a cada monstro, fazendo com que seus inimigos sejam derrotados;</li>
              <li>Toda vez que um monstro chegar até o jogador, ele irá perder uma de suas vidas; </li>
              <li>As teclas precisarão ser apertadas por ordem de chegada de monstros, também sendo descontado vida do jogador caso ele aperte as teclas de maneira errônea. </li>
              <li>Conforme o jogador avança, sua pontuação é marcada e seu nível dentro do jogo aumenta. </li>
            </ul>
          </p>
        </div>
        <div className="jv-help">
          <h1 className="titleHelp">Tic-Tac-Toe</h1>
          <p>
            <ul>
              <li>Dois jogadores escolhem uma marcação (Escudo ou Espada), sendo a Espada definida como o usuário principal do jogo e que irá marcar ponto dentro do ranking.</li>
              <li>Os usuários jogam alternadamente, uma marcação por vez, numa lacuna que esteja vazia.</li>
              <li>O objetivo é conseguir três escudos ou espadas em linha, quer horizontal, vertical ou diagonal, e ao mesmo tempo, quando possível, impedir o adversário de ganhar na próxima jogada.</li>
              <li>Quando o jogador (Espada) conquista o objetivo, marca-se um (1) ponto para ele. Porém, quando o adversário (Escudo) ganha o jogo, é dado Game Over à Espada (jogador principal cadastrado), não marcando ponto ao Escudo.  </li>
            </ul>
          </p>
        </div>
        <div className="lo-help">
          <h1 className="titleHelp">Lights Out</h1>
          <p>
            <ul>
              <li>O objetivo do jogo é fazer com que todas as luzes roxas sejam apagadas;</li>
              <li>Conforme o jogador clica para apagar as luzes, outras acenderão em seu lugar. Para isso, o jogador precisará compreender a lógica utilizada para vencer este desafio; </li>
              <li>Dentro do jogo haverá um cronômetro, no qual é marcado no ranking aqueles que conseguem resolver o problema do jogo em menos tempo. </li>
            </ul>
          </p>
        </div>
        <div className="general-help">
          <h1 className="titleHelp">Regras Gerais</h1>
          <p>
          <ul>
              <li>No início do jogo, será solicitado apenas o nome do usuário para a marcação de pontos dentro do ranking; </li>
              <li>O jogador começará com sua pontuação zerada em todos os três jogos;</li>
              <li>Cada jogo terá seu próprio placar, no qual apresentará seu score; </li>
              <li>O usuário poderá trocar as skins personalizadas de cada tema (medieval, futurista, dinossauro ou padrão), podendo utilizá-la em todos os outros jogos;</li>
              <li>Dentro do menu de cada jogo, haverá um ranking contendo os “top 3” jogadores com maior pontuação ou tempo dentro de todos os jogos;</li>
              <li>Caso o jogador deseje sair do jogo, seus pontos conquistados serão zerados, permanecendo apenas no ranking, caso faça parte dele.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    
  );
};

/* REGRAS GERAIS
<ol>
  <li>
    No início do jogo, será solicitado apenas o nome do usuário para a
    marcação de pontos dentro do ranking;
  </li>
  <li>
    O jogador começará com sua pontuação zerada em todos os três jogos;
  </li>
  <li>
    Cada jogo terá seu próprio placar, no qual apresentará seu score;
  </li>
  <li>
    Caso haja vitórias entre algum dos jogos, o usuário irá desbloquear
    skins personalizadas de cada tema (medieval - tic-tac-toe; futurista
    - memory game; dinossauro - write or death), podendo utilizá-la em
    todos os outros jogos;
  </li>
  <li>
    Dentro do menu do jogo, haverá um ranking contendo os “top 3”
    jogadores com maior pontuação dentro de todos os jogos;
  </li>
  <li>
    Caso o jogador deseje sair do jogo, seus pontos conquistados serão
    zerados, permanecendo apenas no ranking, caso faça parte dele.
  </li>
</ol>
*/
export default Help;
