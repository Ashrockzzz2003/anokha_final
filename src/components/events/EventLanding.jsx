import { Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import RegisterMembers from "../events/RegisterMembers";
import { useAuth } from "../../auth/useAuth";
import { useParams } from 'react-router-dom'
import secureLocalStorage from "react-secure-storage";
import Markdown from 'react-markdown';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventLanding = () => {

  const { moveToTransaction } = useAuth();
  const { eventId } = useParams();

  const [isAmritaCBE, setIsAmritaCBE] = useState(secureLocalStorage.getItem("isAmritaCBE"));
  const [hasActivePassport, setHasActivePassport] = useState(parseInt(secureLocalStorage.getItem("hasActivePassport")));


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

  const [events] = useState(JSON.parse(secureLocalStorage.getItem("events")));


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
  


  // get Event by ID
  const [event] = useState(
    events.filter((event) => event.eventId === parseInt(eventId)
    ));

  const isGroupEvent = event[0].groupOrIndividual === 1;

  return (
    <div className="w-full block items-center justify-center lg:flex lg:justify-center pb-32 pt-40">
      <div className="w-auto lg:pr-12">
        <img src={event[0].url} className="w-72 rounded-lg ml-auto mr-auto" alt="Event Pix" />
        {isGroupEvent ?
          <div className="mt-4 w-fit ml-auto mr-auto">
            <RegisterMembers membercount={4} amount={500} buttonLabel={"Register with Members"} />
          </div>
          :
          <div className="mt-4 w-fit pt-4 ml-auto mr-auto">
            <Button
              variant="filled"
              className="bg-khaki text-backgroundColor"
              size="lg"
              onClick={handleRegsiter}
            >
              <span className="text-lg">Register</span>
            </Button>
          </div>
        }

      </div>
      <div className="m-16 mt-24 lg:pl-24 lg:ml-16 lg:w-1/2">
        <Typography variant="h1" className="mb-4 font-title uppercase tracking-wider text-khaki text-left">
          {event[0].eventName}
        </Typography>
        {/* <Typography variant="h4" className="mb-16 text-khaki text-left">
          Tagline
        </Typography> */}
        <Typography className="mb-16 text-babyPowder text-left">
          {event[0].description}
        </Typography>
      </div>
    </div>
  );
};

export default EventLanding;