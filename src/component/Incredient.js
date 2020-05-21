import React from "react";

function Incredient({ name, amount }) {
  return (
    <div>
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
}

export default Incredient;
