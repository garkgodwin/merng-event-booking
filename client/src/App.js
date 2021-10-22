import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
//?queries
import { GET_LOGGED_IN_DATA } from "./graphql/queries/user.queries";

//*STYLES
import "./App.css";

//?COMPONENTS
import Navbar from "./components/Navbar";
import Pages from "./pages";
import FullLoader from "./components/loaders/FullLoader";

//?helpers
import { getTokenFromLocal } from "./utils/token";

const App = () => {
  //?checks if logged in
  const [getLoggedInData, { error, loading, data }] =
    useLazyQuery(GET_LOGGED_IN_DATA);

  useEffect(() => {
    getLoggedInData();
    console.log(loading);
    console.log(error);
    console.log(data);
  }, []);
  return (
    <div className="App">
      {loading && <FullLoader />}
      <Navbar />
      <Pages />
    </div>
  );
};

export default App;
