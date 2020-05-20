import React, { useState, useEffect } from "react";

function Usefek() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you click  ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> click {count}</button>
    </div>
  );
}

export default Usefek;
