import { Typography, Button, Chip } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth";
import { useParams } from 'react-router-dom'
import secureLocalStorage from "react-secure-storage";
import 'react-toastify/dist/ReactToastify.css';

import ReactMarkdown from "react-markdown";
import "../styles/markdown.css";

const EventLanding = () => {
  const { eventId } = useParams();

  const [isAmritaCBE, setIsAmritaCBE] = useState(secureLocalStorage.getItem("isAmritaCBE"));
  const [hasActivePassport, setHasActivePassport] = useState(parseInt(secureLocalStorage.getItem("hasActivePassport")));

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://anokha.amrita.edu/api/userWeb/events/all')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  // store events in secureLocalStorage
  secureLocalStorage.setItem("events", JSON.stringify(events));

  const { moveToTransaction } = useAuth();


  // Handle Login
  const handleRegsiter = (e) => {
    e.preventDefault();
    if (!JSON.parse(secureLocalStorage.getItem("token"))) {
      alert("Please Login to Register for Events.");
      window.location.href = "/login";
      return;
    }
    if (!hasActivePassport) {
      alert("Please Activate your Passport to Register for Events.");
      window.location.href = "/amritaPassport";
      return;
    }
    console.log(parseInt())
    moveToTransaction(isAmritaCBE, parseInt(eventId), false);
  };


  // "eventId": 1,
  // "eventName": "EVENT0",
  // "eventOrWorkshop": 1,
  // "groupOrIndividual": 1,
  // "maxCount": 1,
  // "description": "DESC0",
  // "url": "https://play-lh.googleusercontent.com/VojafVZNddI6JvdDGWFrRmxc-prrcInL2AuBymsqGoeXjT4f9sv7KnetB-v3iLxk_Koi",
  // "userEmail": "managerEmail1@gmail.com",
  // "date": "24-Mar-2023",
  // "eventTime": "08:14:57",
  // "venue": "VENUE0",
  // "fees": 100,
  // "totalNumberOfSeats": 100,
  // "noOfRegistrations": 0,
  // "timeStamp": "2023-04-04T10:51:47.000Z",
  // "refundable": 0,
  // "departmentAbbr": "DEP0"
  // ? fees date time venue

  const tempData = useState(secureLocalStorage.getItem("userEvents"));
  const [data] = useState(JSON.parse(tempData[0]));
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if(data) {
      data.forEach((event) => {
        if (event.eventId === parseInt(eventId)) {
          setRegistered(true);
        }
      })
    }
  })


  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <div className="w-4/5">
          <div className="flex flex-wrap items-center justify-center gap-8 pt-5">
            {events.length ? (
              events.map((event) => (
                <div>
                  {event.eventId === parseInt(eventId) ? (
                    <div className="items-center justify-center block w-full pt-8 pb-32 lg:flex lg:justify-center">
                      <div className="w-auto lg:pr-12">
                        <img
                          src={event.url}
                          className="ml-auto mr-auto rounded-lg w-96"
                          alt="Event Pix"
                        />
                        <div className="pt-4 mt-4 ml-auto mr-auto w-fit">
                          {
                            registered === true ? (<Button
                              variant="filled"
                              className="bg-khaki text-backgroundColor"
                              size="lg"
                              disabled
                            >
                              <span className="text-lg">Registered</span>
                            </Button>) : (
                              <Button
                                variant="filled"
                                className="bg-khaki text-backgroundColor"
                                size="lg"
                                onClick={handleRegsiter}
                              >
                                <span className="text-lg">Register</span>
                              </Button>
                            )
                          }
                        </div>

                      </div>
                      <div className="m-16 pt-28 lg:pl-24 lg:ml-16 lg:w-1/2">
                        <Typography
                          variant="h1"
                          className="mb-4 tracking-wider text-left uppercase font-title text-khaki"
                        >
                          {event.eventOrWorkshop === 1
                            ? "Workshop - "
                            : "Event - "}
                          {event.eventName}
                        </Typography>
                        <div className="flex flex-wrap gap-4 pb-4">
                          <Chip
                            value={`Fees: ₹ ` + event.fees}
                            className="bg-khaki text-backgroundColor"
                          />
                          <Chip
                            value={"Date: " + event.date}
                            className="bg-khaki text-backgroundColor"
                          />
                          <Chip
                            value={"Dept: " + event.departmentAbbr}
                            className="bg-khaki text-backgroundColor"
                          />
                          {event.groupOrIndividual === 1 ? (
                            <Chip
                              value={"Group Event"}
                              className="bg-khaki text-backgroundColor"
                            />
                          ) : (
                            <Chip
                              value={"Individual Event"}
                              className="bg-khaki text-backgroundColor"
                            />
                          )}
                          {/* <Chip value={"Time : " + event.eventTime} className="bg-khaki text-backgroundColor" />
                        <Chip value={"Venue : " + event.venue} className="bg-khaki text-backgroundColor" /> */}
                        </div>
                        {/* <Typography variant="h4" className="mb-16 text-left text-khaki">
                  Tagline
                </Typography> */}
                        <ReactMarkdown className="mb-16 text-left my-markdown text-babyPowder">
                          {event.description}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <Typography
                variant="h6"
                className="pt-8 mb-2 text-center text-lime-50"
              >
                No events found
              </Typography>
            )}
          </div>
        </div>
      </div >
    </div >
  );
};

export default EventLanding;