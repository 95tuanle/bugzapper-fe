import './App.css';
import React from "react";

function App() {

  return (
    <>
      <corbado-passkey-associate
        project-id={process.env.CORBADO_PROJECT_ID}
        association-token="<assocation token>"/>
    </>
  );
}

export default App;
