import React from "react";

function Cointracker({ totalFlip, headCount, tailsCount }) {
  return (
    <>
      <p>
        Out of -{totalFlip}- flips, there are -{headCount}- heads and -
        {tailsCount}- tails
      </p>
    </>
  );
}

export default Cointracker;
