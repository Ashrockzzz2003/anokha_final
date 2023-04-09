import React, { useState, useEffect } from "react";
import Card from "../events/Cards";

const API_URL = "http://52.66.236.118:3000/userWeb/events/all";

const EventsRegistered = () => {
  const [events, setEvents] = useState([]);

  const fetchUserData = () => {
    fetch(`${API_URL}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-4">
      {events.map((event) => (
        <Card
          key={event.eventId}
          title={event.eventName}
          imageUrl={event.url}
          description={event.description}
          tags={[event.fees, event.totalNumberOfSeats]}
          buttonLabel={"View Event"}
        />
      ))}
    </div>
  );
};

export default EventsRegistered;
