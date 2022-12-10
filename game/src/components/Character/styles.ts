import styled from "styled-components";

export const Container = styled.div<{size: {w: number, h: number}, left: number, top: number, char: string}>`
  display: block;
  width: ${props=>props.size.w}px;
  height: ${props=>props.size.h}px;
  position: absolute;
  left: ${props=>props.left}px;
  top: ${props=>props.top}px;
  background-image: url('${props => props.char}');
  backgroud-repeat: no-repeat;
  background-position: 0px 0px;
  `;