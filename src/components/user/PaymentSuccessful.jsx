import {Button, Typography} from "@material-tailwind/react";
import React from "react";
import {RiCheckLine} from "react-icons/ri";

export const PaymentStatus = ({status}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-backgroundColor h-screen">
      <div className="text-backgroundColor items-center justify-center bg-white rounded-3xl px-32 py-24">
        <div className="flex items-center justify-center">
          <RiCheckLine color="green" size={100} />
        </div>
        <Typography>Payment Successful !</Typography>
        <Button
          className="rounded px-6 py-4"
          style={{backgroundColor: "#00223a", color: "white", marginTop: "1rem"}}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};
