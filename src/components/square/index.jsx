import { useCallback } from "react";

export default function Square(props) {
  const {onClick, index, value} = props;

  const handleClick = useCallback(
    () => {
      onClick(index);
    },
    [onClick,index]
  );

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
