import {Button, Typography} from "@material-tailwind/react";
import React, { useState } from "react";
import eventide from "../utils/eventide.png";
import { useAuth } from "../../auth/useAuth";
import secureLocalStorage from "react-secure-storage";

const AmritaPassport = () => {
  
  const { moveToTransaction } = useAuth();
  const [isAmritaCBE, setIsAmritaCBE] = useState(secureLocalStorage.getItem("isAmritaCBE"));

  // Handle Login
  const handleBuyPassport = (e) => {
    e.preventDefault();
    if (!JSON.parse(secureLocalStorage.getItem("token"))) {
      alert("Please Login to Buy Passport.");
      window.location.href = "/login";
      return;
    }
    moveToTransaction(isAmritaCBE, 0, true);
  };
  

  return (
    <div className="w-full block items-center justify-center lg:flex lg:justify-center pb-32 pt-32">
      <div className="w-auto lg:pr-12">
        <img
          src={eventide}
          className="w-72 rounded-lg ml-auto mr-auto"
          alt="Event Pix"
        />
        <div className="mt-4 w-fit pt-4 ml-auto mr-auto">
          <Button
            variant="filled"
            className="bg-khaki text-backgroundColor"
            onClick={handleBuyPassport}>
            <span>Buy Passport</span>
          </Button>
        </div>
      </div>
      <div className="m-16 mt-24 lg:pl-24 lg:ml-16 lg:w-1/2">
        <Typography variant="h1" className="mb-4 font-title text-khaki text-left">
          Passport - Your Visa into Anokha
        </Typography>
        
        <Typography
          variant="paragraph"
          className="mb-16 py-4 text-babyPowder text-left">
          The Anokha passport is the exclusive entry ticket that provides access to the Anokha tech fest. All except Amrita Vishwa Vidyapeetham Coimbatore campus students must purchase a passport before registering for events and workshops. Students of the Coimbatore campus need not purchase a passport as long as they register for events and workshops using their registered Amrita email-id. The passport is priced at ₹ 500 (including GST) and only guarantees entry to the tech fest. The events and workshops all have separate registration fees. Physical copies of the passport will not be provided instead, the QR code that will be provided on purchase of the passport must be produced to gain access to the events and workshops on all three days of the tech fest.
        </Typography>
      </div>
    </div>
  );
};

export default AmritaPassport;
