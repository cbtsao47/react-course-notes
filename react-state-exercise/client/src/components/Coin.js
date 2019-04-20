import React from "react";

function Coin({ isHeads, handleClick }) {
  const result = isHeads ? "heads" : "tails";
  return (
    <div>
      {isHeads === null ? null : (
        <img src={`https://tinyurl.com/react-coin-${result}-jpg`} alt="coin" />
      )}

      <button onClick={handleClick}>Flip the Coin</button>
    </div>
  );
}

export default Coin;
