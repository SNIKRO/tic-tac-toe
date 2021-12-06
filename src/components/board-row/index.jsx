import Square from "../square";

export default function BoardRow(props){
  return(
    <div className="board-row">
      {props.squares.map((s, i) => (<Square key={i} value={s} onClick={props.onSquareClick} index={props.initialIndex + i}/>))}
    </div>
  );
}