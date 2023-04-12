import {Button, Typography} from "@material-tailwind/react";
import React from "react";
import eventide from "../utils/eventide.png";
import RegisterMembers from "../events/RegisterMembers";
import ConfirmPaymentPage from "../user/ConfirmPaymentPage.jsx";
import { useAuth } from "../../auth/useAuth";
import { useParams } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const EventLanding = () => {
  
  const { moveToTransaction } = useAuth();
  const { eventId } = useParams();

  // Handle Login
  const handleBuyPassport = (e) => {
    e.preventDefault();
    if (!JSON.parse(secureLocalStorage.getItem("token"))) {
      alert("Please Login to Buy Passport.");
      window.location.href = "/login";
      return;
    }
    moveToTransaction(parseInt(eventId));
  };
  

  return (
    <div className="w-full block items-center justify-center lg:flex lg:justify-center pb-32 pt-32">
      <div className="w-auto lg:pr-12">
        <img
          src={eventide}
          className="w-72 rounded-lg ml-auto mr-auto"
          alt="Event Pix"
        />
        <div className="mt-4 w-fit ml-auto mr-auto">
          <Button
            variant="filled"
            className="bg-khaki text-backgroundColor"
            onClick={handleBuyPassport}>
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
        <Typography
          variant="paragraph"
          className="mb-16 text-babyPowder text-left">
          Dummy content{" "}
        </Typography>
      </div>
    </div>
  );
};

export default EventLanding;
