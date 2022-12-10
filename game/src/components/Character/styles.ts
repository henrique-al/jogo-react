import styled from "styled-components";

export const Container = styled.div<{size: number, left: number, top: number, char: string}>`
  display: block;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  position: absolute;
  left: ${props=>props.left}px;
  top: ${props=>props.top}px;
  background-image: url('${props => props.char}');
  background-position: 0px -100px;
  `;