import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import RCard from "../events/RegisteredEventCard";

const EventsRegistered = ({userEmail}) => {
  const tempData = useState(secureLocalStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));

  return (
    <div className="flex flex-wrap justify-center gap-4 items-center pt-5">
      {
        data.length ? (
          data.map((event) => (
            <RCard
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
              qrlink={`${userEmail}/${event.eventId}`}
            />
          ))
        ) : (
          <Typography
                variant="h6"
                className="mb-2 text-red-100 text-center"
              >
                You have not registered for any events yet.
              </Typography>
        )
      }
    </div>
  );
};

export default EventsRegistered;