import React from "react";
import GlobalStyle from "./globalStyles"; 
import RouterPages from './routesConfig';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RouterPages/>
    </div>
  );
}

export default App;
