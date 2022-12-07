import { useState, useMemo, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number}>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition(
        {
          x: (e.pageX < 390? 390:e.pageX > 923? 923:e.pageX) +5,
          y: (e.pageY < 30? 30:e.pageY > 575? 575:e.pageY) +5
        }
      )
      // console.log(mousePosition)
    }
    document.addEventListener('mousemove', (e: MouseEvent) => handleMouseMove(e))
    return () => document.removeEventListener('mousemove', (e: MouseEvent) => handleMouseMove(e))
  })

  return mousePosition;
};

export default useMousePosition;