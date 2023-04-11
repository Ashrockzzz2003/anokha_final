import React, { useState } from "react";
import Card from "../events/Cards";

const EventsRegistered = () => {
  const tempData = useState(localStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));

  return (
    <div className="flex flex-wrap gap-8 py-8">
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