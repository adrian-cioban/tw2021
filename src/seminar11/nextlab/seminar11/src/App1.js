import React, { useState } from "react";

const App = () => {
  const [steps, setSteps] = useState(0);
  const [showSteps, setShowSteps] = useState(true);

  return (
    <div className="container">
      <p>Today you've taken {steps} steps!</p>
      <button onClick={() => setSteps(steps + 1)}>Click Me</button>
      <br></br>

      {showSteps ? <span></span> : <span>{steps}</span>}
      <button onClick={() => setShowSteps(!showSteps)}>Show steps</button>
    </div>
  );
};

export default App1;
