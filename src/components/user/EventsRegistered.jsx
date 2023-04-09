import React, { useState } from "react";
import Card from "../events/Cards";

const EventsRegistered = () => {
  const tempData = useState(localStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-4">
      {data.map((event) => (
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