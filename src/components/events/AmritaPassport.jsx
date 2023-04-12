import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import eventide from "../utils/eventide.png";
import RegisterMembers from "../events/RegisterMembers";
import ConfirmPaymentPage from "../user/ConfirmPaymentPage.jsx";

const EventLanding = () => {
  const data = {
    "orderID": "order_DBJOWzybf0sJbb",
    "amount": 50000,
    "eventName": "Eventide",
    "fullName": "Vira Manohar aka LEGEND",
    "email": "vira_manohar_legend@cb.students.amrita.edu",
  }

  
  /*
        "eventId": 1,
        "eventName": "EVENT0",
        "eventOrWorkshop": 1,
        "groupOrIndividual": 1,
        "maxCount": 1,
        "description": "DESC0",
        "url": "https://play-lh.googleusercontent.com/VojafVZNddI6JvdDGWFrRmxc-prrcInL2AuBymsqGoeXjT4f9sv7KnetB-v3iLxk_Koi",
        "userEmail": "managerEmail1@gmail.com",
        "date": "24-Mar-2023",
        "eventTime": "08:14:57",
        "venue": "VENUE0",
        "fees": 100,
        "totalNumberOfSeats": 100,
        "noOfRegistrations": 0,
        "timeStamp": "2023-04-04T10:51:47.000Z",
        "refundable": 0,
        "departmentAbbr": "DEP0"
  */

  return (
    <div className="w-full block items-center justify-center lg:flex lg:justify-center pb-32 pt-32">
      <div className="w-auto lg:pr-12">
        <img src={eventide} className="w-72 rounded-lg ml-auto mr-auto" alt="Event Pix" />
        <div className="mt-4 w-fit ml-auto mr-auto">
            <Button
              variant="filled"
              className="bg-khaki text-backgroundColor"
              onClick={() => {}}
            >
              <span>Buy Passport</span>
            </Button>
          </div>

      </div>
      <div className="m-16 mt-24 lg:pl-24 lg:ml-16 lg:w-1/2">
        <Typography variant="h1" className="mb-4 text-khaki text-left">
dUMMY data
        </Typography>
        <Typography variant="h4" className="mb-16 text-khaki text-left">
          Tagline
        </Typography>
        <Typography variant="paragraph" className="mb-16 text-babyPowder text-left">
Dummy content        </Typography>
      </div>
    </div>
  );
};

export default EventLanding;