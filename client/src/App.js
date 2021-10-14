import React from "react";

//*STYLES
import "./App.css";

//?COMPONENTS
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Navbar />
    </div>
  );
};

export default App;
