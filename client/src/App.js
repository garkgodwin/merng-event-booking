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
  //?checks if logged in
  const { loading, error, data } = useQuery(GET_LOGGED_IN_DATA);
  if (loading) return "LOADING>>>";
  if (error) return `ERROR: ${error.message}`;

  if (data) {
    console.log(data);
  }
  return (
    <div className="App">
      <Navbar loggedInData={data} />
      <Pages loggedInData={data} />
    </div>
  );
};

export default App;
