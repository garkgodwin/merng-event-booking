import React, { useState } from "react";
import { useQuery } from "@apollo/client";
//?queries
import { GET_EVENTS } from "../../graphql/queries/event.queries";
//?COMPONENTS
import EventCard from "../../components/cards/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);
  const { loading, error, data } = useQuery(GET_EVENTS);

  console.log(data);
  return (
    <div className="Page page-home">
      {loading && <h2>Fetching events</h2>}
      {error && <h2>Error</h2>}
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Home;
