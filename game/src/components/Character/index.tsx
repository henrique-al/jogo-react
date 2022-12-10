import { useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { CharacterImages } from "../../types/CharacterImage";
import { CharacterSides } from "../../types/CharacterSides";
import * as C from "./styles";

type Props = {
  src: string
};

export const Character = ({ src }: Props) => {
  const mousePos = useMousePosition()
  const size = 50;

  return (
    <C.Container
        size={size} 
        left={mousePos.x}
        top={mousePos.y}
        char={src}
    >

    </C.Container>
  );
};
