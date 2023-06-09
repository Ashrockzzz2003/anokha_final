import React, { useEffect, useState } from "react";
import Searchbar from "./events/Searchbar";
import Card from "./events/Cards";
import { Typography } from "@material-tailwind/react";
import SelectBox from "./events/Select";
import secureLocalStorage from "react-secure-storage";

const Events = () => {

  // const { fetchEvents } = useAuth();
  // useEffect(() => {
  //   window.addEventListener("load", async () => {
  //     await fetchEvents();
  //   })
  // }, [fetchEvents])

  const [events, setEvents] = useState([]);

useEffect(() => {
  fetch("https://anokha.amrita.edu/api/userWeb/events/all")
    .then((response) => response.json())
    .then((data) => setEvents(data.reverse()));
}, []);


  // const [events] = useState(JSON.parse(secureLocalStorage.getItem("events")));
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [eventOrWorkshop, setEventOrWorkshop] = useState("");
  const [groupOrIndividual, setGroupOrIndividual] = useState("");
  const [departmentAbbr, setDepartmentAbbr] = useState("");

  const [filteredEvents, setFilteredEvents] = useState(events);

  const departmentList = [
    "All",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Cyber Security",
    "Mathematics",
    "Electronics and Communication Engineering",
    "Computer Science and Engineering",
    "Social Work",
    "Civil Engineering",
    "Agriculture",
    "English",
    "Chemical Engineering",
    "Aerospace Engineering",
    "Computer Engineering and Networking",
    "Team Media - Club",
    "Amrita Centre for Entrepreneurship",
    "Department of Science",
    "Nivesha - Club",
    "Department of Mass Communication",
    "Elite - Club",
    "Corporate and Industry Relations",
    "Eventide",
    "Toastmasters - Club"
  ];

  const departmentMap = {
    "All": "All",
    "Electrical and Electronics Engineering": "EEE",
    "Mechanical Engineering": "MEE",
    "Cyber Security": "CYS",
    "Mathematics": "MATH",
    "Electronics and Communication Engineering": "ECE",
    "Computer Science and Engineering": "CSE",
    "Social Work": "MSW",
    "Civil Engineering": "CIE",
    "Agriculture": "AGRI",
    "English": "ENG",
    "Chemical Engineering": "CHE",
    "Aerospace Engineering": "AEE",
    "Computer Engineering and Networking": "CEN",
    "Team Media - Club": "TM",
    "Amrita Centre for Entrepreneurship": "ACE",
    "Department of Science": "SCI",
    "Nivesha - Club": "NIV",
    "Department of Mass Communication": "ASCOM",
    "Elite - Club": "ELITE",
    "Corporate and Industry Relations": "CIR",
    "Eventide": "EVN",
    "Toastmasters - Club": "ATC",
  };

  useEffect(() => {
    if (events.length) {
      // console.log(events);
      setFilteredEvents(
        events.filter((event) =>
          (event.eventName
            .toLowerCase()
            .includes(searchTerm?.toString().toLowerCase()))
          && (event.date.toUpperCase() === selectedOption?.toString().toUpperCase() || selectedOption === "All" || selectedOption === "")
          && (event.eventOrWorkshop === eventOrWorkshop || eventOrWorkshop === "All" || eventOrWorkshop === "")
          && (event.groupOrIndividual === groupOrIndividual || groupOrIndividual === "All" || groupOrIndividual === "")
          && (event.departmentAbbr.toUpperCase() === departmentAbbr?.toString().toUpperCase() || departmentAbbr === "All" || departmentAbbr === "") && !([89,48,92,51,55,96,98,99,57,7,8,65].includes(parseInt(event.eventId)))
        )
      );
    }
  }, [events, searchTerm, selectedOption, eventOrWorkshop, groupOrIndividual, departmentAbbr]);

  // store events in secureLocalStorage
  secureLocalStorage.setItem("events", JSON.stringify(events));

  //fetch events from https://anokha.amrita.edu/api/userWeb/events/all api
  // https://anokha.amrita.edu/api/userWeb/events/all


  // if filteredEvents is empty, then show the message "No events found"
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
          <Searchbar
            onChange={(value) => {
              setSearchTerm(value);
            }}
          />
          <br />
          <div className="block justify-center border-2 border-khaki lg:flex bg-background rounded-xl w-fit ml-auto mr-auto p-0 lg:p-4">
            <SelectBox
              label={"Starting Day"}
              options={["All", "27-APR-2023", "28-APR-2023", "29-APR-2023"]}
              onChange={(value) => {
                setSelectedOption(value);
              }}
            />
            <SelectBox
              label={"Event/Workshop"}
              options={["All", "Event", "Workshop"]}
              onChange={(value) => {
                if (value === "Event") {
                  setEventOrWorkshop(0);
                } else if (value === "Workshop") {
                  setEventOrWorkshop(1);
                } else {
                  setEventOrWorkshop(value);
                }
              }}
            />
            <SelectBox
              label={"Group/Individual"}
              options={["All", "Group", "Individual"]}
              onChange={(value) => {
                if (value === "Group") {
                  setGroupOrIndividual(1);
                } else if (value === "Individual") {
                  setGroupOrIndividual(0);
                } else {
                  setGroupOrIndividual(value);
                }
              }}
            />
            <SelectBox
              label={"Department"}
              options={departmentList}
              onChange={(value) => {
                setDepartmentAbbr(departmentMap[value]);
              }}
            />
          </div>
          <br />
          <div className="flex flex-wrap justify-center gap-8 items-center pt-5">
            {filteredEvents.length ? (
              filteredEvents.map((event) => (
                <Card
                  key={event.eventId}
                  title={event.eventName}
                  imageUrl={event.url}
                  description={event.description}
                  tags={[event.departmentAbbr, event.fees]}
                  fees={event.fees}
                  date={event.date}
                  departmentAbbr={event.departmentAbbr}
                  eventOrWorkshop={event.eventOrWorkshop}
                  buttonLabel={"Register"}
                  linkTo={`/events/${event.eventId}/about`}
                />
              ))
            ) : (
              <Typography
                variant="h6"
                className="mb-2 pt-8 text-lime-50 text-center"
              >
                Loading...
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;