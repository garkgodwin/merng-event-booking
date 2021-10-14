import React from "react";

//?COMPONENTS
import EventCard from "../../components/cards/EventCard";

const Home = () => {
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
