import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [name, setName] = useState("Ion");
  const nameRef = useRef();

  useEffect(() => {
    document.title = `Salut ${name}`;
  }, []);

  const handleClick = () => setName(nameRef.current.value);

  return (
    <div className="container">
      <label htmlFor="name">Name:</label>
      <input name="name" ref={nameRef}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default App;
