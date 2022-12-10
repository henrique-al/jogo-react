import React from "react";

import './Help.css'

const Help = () => {
  return (
    <div className="fundo-help">
      <div className="conteudo-help">
        <div className="wd-help">
          <h1>Write or Die</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, est harum magni voluptates quidem adipisci tenetur itaque sequi officiis illo, vitae molestiae eum. Eius praesentium suscipit natus, amet expedita ipsam!</p>
        </div>
        <div className="jv-help">
          <h1>Tic-Tac-Toe</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quod facilis corrupti consequuntur ea numquam vel quam quis dicta. Repudiandae nulla dolorum numquam amet quo tenetur qui! Sint, voluptatibus dicta.</p>
        </div>
        <div className="lo-help">
          <h1>Lights Out</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cum, maxime quod atque unde quasi velit consequatur ratione aliquam nihil voluptatem repudiandae natus praesentium vel aliquid aut consectetur tempore veniam.</p>
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
