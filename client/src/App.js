import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
//?queries
import { GET_LOGGED_IN_DATA } from "./graphql/queries/user.queries";

//*STYLES
import "./App.css";

//?COMPONENTS
import Navbar from "./components/Navbar";
import Pages from "./pages";

const App = () => {
  const { loading, error, loggedInData } = useQuery(GET_LOGGED_IN_DATA);
  useEffect(() => {
    console.log(loggedInData);
  }, [loggedInData]);
  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
};

export default App;
