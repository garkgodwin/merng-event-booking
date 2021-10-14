import React from "react";

//*STYLES
import "./App.css";

//?COMPONENTS
import Navbar from "./components/Navbar";
import Pages from "./pages";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
};

export default App;
