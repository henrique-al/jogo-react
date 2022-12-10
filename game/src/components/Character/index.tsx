import useMousePosition from "../../hooks/useMousePosition";
import * as C from "./styles";

type Props = {
  src: string
};

export const Character = ({ src }: Props) => {
  const mousePos = useMousePosition()
  const size = src.includes('medieval')? {w: 34, h: 52}:src.includes('mcfly')? {w: 50, h: 62}:src.includes('dinossauro')? {w: 38, h: 55}:{w: 46, h: 53};

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
