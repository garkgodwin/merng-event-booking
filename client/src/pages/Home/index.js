import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../graphql/queries/event.queries";

//?COMPONENTS
import EventCard from "../../components/cards/EventCard";

const Home = () => {
  const { error, loading, data } = useQuery(GET_EVENTS);
  return (
    <div className="Page page-home">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Home;
