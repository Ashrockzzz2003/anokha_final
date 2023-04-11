import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";

// NodeJS handle post request to this page from payubiz


export const PaymentStatus = () => {
  const { statusId } = useParams();

  return (
    <div className="flex flex-col justify-center items-center bg-backgroundColor h-screen">
      <div className="text-backgroundColor items-center justify-center bg-white rounded-3xl px-32 py-24">
        {
          statusId === "1"
            ?
            <>
              <div className="flex items-center justify-center">
                <AiFillCheckCircle color="green" size={160} />
              </div>
              <Typography variant="h2" className="text-center justify-center">Payment Successful!</Typography>
            </>
            :
            <>
              <div className="flex items-center justify-center">
                <RxCrossCircled color="red" size={160} />
              </div>
              <Typography variant="h2" className="text-center justify-center">Payment Failed !</Typography>
            </>
        }



        <Link to={"/"}>
          <Button
            className="rounded px-6 py-4"
            style={{ backgroundColor: "#00223a", color: "white", marginTop: "1rem" }}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
