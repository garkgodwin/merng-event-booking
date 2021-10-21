import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
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
  const { loading, error, data } = useQuery(GET_LOGGED_IN_DATA);

  if (data) {
    console.log(data);
  }
  console.log(getTokenFromLocal());
  return (
    <div className="App">
      {loading && <FullLoader />}
      <Navbar />
      <Pages />
    </div>
  );
};

export default App;
