import styled from "styled-components";

export const Personagem = styled.img<{distance: number}>`
  width: 250px;
  height: 361px;
  position: absolute;
  left: ${props => props.distance}px;

  animation: animacao3 1s alternate infinite; @keyframes animacao3 { from{  top: 350px;} to {top: 355px;}}
  `;

  export const Enemy = styled.div<{ pos: string, src: string, distance: number, fly:boolean }>`
  width: 130px;
  height: 200px;
  float: ${props => props.pos};
  background-image: url(${props => props.src});
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 25px;
  left: ${props => props.distance}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;

  ${props => props.fly ? 
  ' animation: animacao 400ms alternate infinite; @keyframes animacao {from{top: 100px; } to {top: 150px; }}'
  :
  ' animation: animacao2 200ms alternate infinite; @keyframes animacao2 { from{top: 450px;} to {top: 453px;}}'}
`

export const EnemyLetter = styled.div`
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    font-size: 20px;
    text-align: center;
    margin-top: -30px;
    color: white;
    background-color: rgb(0, 1, 46);
`;

export const Level = styled.div`
  width: 100px;
  height: 80px;
  color: white;
  font-size: 35px;
`

export const Timer = styled.div`
  width: 50px;
  height: 30px;
  font-size: 25px;
`

export const life = styled.div`
  position: absolute;
  font-size: 100px;
  font-weight: bold;
  left: 1390px;
  top: 10px;
  color: red; 
`