import styled from "styled-components";
export const Container = styled.div`
  background-color: #24282F;
  min-height: 100vh;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Map = styled.div`
  width: 650px;
  height: 650px;
  position: relative;
  background-image: url('/assets/map2.png');
  background-position: left top;
  background-size: 100%;
`;