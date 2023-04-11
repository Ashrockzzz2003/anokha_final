import React, { useEffect, useState } from "react";
import Searchbar from "./events/Searchbar";
import Card from "./events/Cards";
import { Typography } from "@material-tailwind/react";
import SelectBox from "./events/Select";
import { useAuth } from "../auth/useAuth";
import  secureLocalStorage  from  "react-secure-storage";

const Events = () => {
  const { fetchEvents } = useAuth();
  useEffect(() => {
    window.addEventListener("load", async () => {
      await fetchEvents();
    })
  }, [fetchEvents])

  const [events] = useState(JSON.parse(secureLocalStorage.getItem("events")));
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (events.length) {
      setFilteredEvents(
        events.filter((event) =>
          event.eventName
            .toLowerCase()
            .includes(searchTerm?.toString().toLowerCase())
        )
      );
    }
  }, [events, searchTerm]);

  // return (
  //   <div className="mt-16">
  //     <Typography
  //       variant="h1"
  //       className="mb-2 pt-8 text-4xl md:text-6xl  lg:text-8xl text-lime-50 text-center"
  //     >
  //       Events & Workshops
  //     </Typography>
  //     <div className="flex justify-center">
  //       <br />
  //       <Typography
  //           variant="h6"
  //           className="mb-2 pt-8 text-lime-50 text-center"
  //         >
  //           Events to be updated soon
  //         </Typography>
  //     </div>
  //   </div>
  // );
  
  console.log(events);

  return (
    <div className="mt-16">
      <Typography
        variant="h1"
        className="mb-2 pt-8 text-4xl md:text-6xl  lg:text-8xl text-lime-50 text-center"
      >
        Events & Workshops
      </Typography>
      <div className="flex justify-center">
        <div className="w-4/5 m-10">
          <Searchbar onChange={(value) => {
            setSearchTerm(value);
          }} />
          <br />
          <div className="block justify-center border-2 border-khaki lg:flex bg-babyPowder rounded-xl w-fit ml-auto mr-auto p-4">
            <SelectBox label={"Day"} options={["Day 1", "Day 2", "Day 3"]} />
            <SelectBox label={"Tags"} options={["IOT", "Hacking", "Drone"]} />
          </div>
          <br />
          <div className="flex flex-wrap justify-center gap-8 items-center pt-5">
            {filteredEvents.map((event) => (
              <Card
                key={event.eventId}
                title={event.eventName}
                imageUrl={event.url}
                description={event.description}
                tags={[event.departmentAbbr, event.fees]}
                buttonLabel={"Register"}
                linkTo={`/events/${event.eventId}/about`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;