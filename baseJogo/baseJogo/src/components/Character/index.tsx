import { useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { CharacterImages } from "../../types/CharacterImage";
import { CharacterSides } from "../../types/CharacterSides";
import * as C from "./styles";

type Props = {
  side: CharacterSides,
  src: string
};

export const Character = ({ side, src }: Props) => {
  const mousePos = useMousePosition()
  const size = 50;
  const sides = {
    right: 0,
    left: -50,
    down: -100,
    up: -150,
  }
  return (
    <C.Container
        size={size} 
        left={mousePos.x}
        top={mousePos.y}
        sidePos={sides[side] ?? 0}
        char={src}
    >

    </C.Container>
  );
};
