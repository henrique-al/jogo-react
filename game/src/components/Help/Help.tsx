import React from "react";

const Help = () => {
  return (
    <div className="fundo-help">
      <div className="conteudo-help">
        <div className="wd-help">
          <h1>Write or Die</h1>
          <ol>
            <li>
              O jogador iniciará com 5 vidas, acabando o jogo caso chegue a 0
            </li>
            <li>
              Os 4 tipos de inimigos, sendo eles:
              <ul>
                <li>Esqueleto</li>
                <li>Relógio</li>
              </ul>
              Ambos voadores e terrestres
            </li>
            <li>
              Sobre a cabeça dos inimigos aparecerão as letras que causam dano
              no mesmo, quando as letras acabam ele morre
            </li>
            <li>
              As letras e velocidade de nascimento de novos inimigos variam de
              acordo com o nível, aumentando a cada 10 mortes
            </li>
            <li>
              O nome do jogador e sua pontuação aparecerão no ranking somente se
              o seu score estiver entre o Top 3
            </li>
          </ol>
        </div>
        <div className="jv-help">
          <h1>TIC-TAC-TOE</h1>
        </div>
        <div className="lights-help">
          <h1>Lights Out</h1>
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
