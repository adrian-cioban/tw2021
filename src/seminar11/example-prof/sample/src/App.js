import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [user, setUser] = useState({
    name: "Andrei",
    age: 21,
  });

  return (
    <div>
      <p>
        Hello, {name}, ai varsta de {age}.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Nume"
        value={user.name}
        onChange={(e) => {
          let newUser = {
            name: e.target.value,
            age: user.age,
          };
          setUser(newUser);
        }}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={(e) => {
          let newUser = {
            name: user.name,
            age: e.target.value,
          };
          setUser(newUser);
        }}
      />
    </div>
  );
}

export default App;
