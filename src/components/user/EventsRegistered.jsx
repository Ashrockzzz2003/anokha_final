import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import Card from "../events/Cards";

const EventsRegistered = () => {
  const tempData = useState(secureLocalStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));

  return (
    <div className="flex flex-wrap justify-center items-start gap-8 py-8">
      {
        data.length ? (
          data.map((event) => (
            <Card
              key={event.eventId}
              title={event.eventName}
              imageUrl={event.url}
              description={event.description}
              tags={[event.fees, event.totalNumberOfSeats]}
              buttonLabel={event.eventOrWorkshop === 0 ? "View Event" : "View Workshop"}
              linkTo={`/events/${event.eventId}/about`}
              fees={event.fees}
              date={event.date}
              departmentAbbr={event.departmentAbbr}
              eventOrWorkshop={event.eventOrWorkshop}
            />
          ))
        ) : (
          <Typography
                variant="h6"
                className="mb-2 text-red-100 text-center"
              >
                You have not registered for any events yet.<br />
                If you have registered for an event and it's not shown here, please logout and login again after 5 minutes to see the event here.
              </Typography>
        )
      }
    </div>
  );
};

export default EventsRegistered;