import { useState } from "react"
import { mapSpots } from "../data/mapSpots";
import { CharacterSides } from "../types/CharacterSides";

export const useCharacter = () => {
  const [pos, setPos] = useState({ x: 6, y: 6 });
  const [side, setSide] = useState<CharacterSides>('down');

  const moveLeft = () => {
      setPos(pos => ({
        x: canMove(pos.x-1,pos.y)? pos.x - 1 : pos.x,
        y: pos.y
      }));
      setSide('left');
  }

  const moveRight = () => {
      setPos(pos => ({
        x: canMove(pos.x+1, pos.y)? pos.x + 1:pos.x,
        y: pos.y
      }));
      setSide('right');
  }

  const moveDown = () => {
      setPos(pos => ({
        x: pos.x,
        y: canMove(pos.x, pos.y+1)? pos.y + 1:pos.y
      }));
      setSide('down');
  }

  const moveUp = () => {
      setPos(pos => ({
        x: pos.x,
        y: canMove(pos.x, pos.y-1)? pos.y - 1 : pos.y
      }));
      setSide('up');
  }

  const canMove = (x: number, y: number): number => {
    if ((x < 0 || y < 0) || (x > 15 || y > 15)) return 0;

    if (mapSpots[y][x] === 0) return 0

    return 1;
  }

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
}