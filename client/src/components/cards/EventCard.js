import React from "react";

import "./EventCard.css";

const EventCard = () => {
  return (
    <div className="EventCard">
      <h3 className="ec-title">Birthday</h3>
      <p className="ec-desc">
        A birthday is the best event of all. We can customize your party to the
        best party you could think of.
      </p>
      <p className="ec-price">$1241.98</p>
      <h2 className="ec-creator">Event manager: Gark Godwin</h2>
    </div>
  );
};

export default EventCard;
