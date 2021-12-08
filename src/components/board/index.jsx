import { useCallback, useState } from "react";
import BoardRow from "../board-row";
import calculateWinner from "../winner-calculate";


export default function Board (){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setPlayer] = useState(true);
  const onSquareClick = useCallback(
    (index) => {
      const newSquares = squares.slice();
      if (calculateWinner(newSquares) || newSquares[index]) {
        return;
      }
      newSquares[index] = nextPlayer ? 'X' : 'O';
      setSquares(newSquares);
      setPlayer(!nextPlayer);
    },
    [squares, nextPlayer],
  );

  const winner = calculateWinner(squares);
  let status;
  
  if(winner){
    status = 'Winner is ' + winner; 
  }
  else{
    status = 'Next player: ' + (nextPlayer ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <BoardRow squares={squares.slice(0,3)} onSquareClick={onSquareClick} initialIndex={0}/>
      <BoardRow squares={squares.slice(3,6)} onSquareClick={onSquareClick} initialIndex={3}/>
      <BoardRow squares={squares.slice(6,9)} onSquareClick={onSquareClick} initialIndex={6}/>
    </div>
  );
}


