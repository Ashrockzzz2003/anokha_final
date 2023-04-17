import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import Card from "../events/Cards";

const EventsRegistered = () => {
  const tempData = useState(secureLocalStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));

  return (
    <div className="flex flex-wrap justify-center items-start gap-8 py-8">
      {data.map((event) => (
        <Card
          key={event.eventId}
          title={event.eventName}
          imageUrl={event.url}
          description={event.description}
          tags={[event.fees, event.totalNumberOfSeats]}
          buttonLabel={"View Event"}
          linkTo={`/events/${event.eventId}/about`}
          fees={event.fees}
          date={event.date}
          departmentAbbr={event.departmentAbbr}
        />
      ))}
    </div>
  );
};

export default EventsRegistered;