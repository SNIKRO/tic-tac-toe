import { useCallback, useState } from "react";
import BoardRow from "../board-row";


export default function Board (){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const onSquareClick = useCallback(
    (index) => {
      const newSquares = squares.slice();
      newSquares[index] = 'X';
      setSquares(newSquares);
    },
    [squares],
  );

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <BoardRow squares={squares.slice(0,3)} onSquareClick={onSquareClick} initialIndex={0}/>
      <BoardRow squares={squares.slice(3,6)} onSquareClick={onSquareClick} initialIndex={3}/>
      <BoardRow squares={squares.slice(6,9)} onSquareClick={onSquareClick} initialIndex={6}/>
    </div>
  );
}
