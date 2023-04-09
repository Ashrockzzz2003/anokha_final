import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';

export default function Card({ title, imageUrl, description, tags, buttonLabel, linkTo }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    // Card component with tags, title, bookmark button, and description, buttons for registration
    <div className="hover:scale-105 hover:rounded-3xl rounded-2xl overflow-hidden shadow-lg bg-babyPowder m-4 text-center">
      <div className='w-fit ml-auto' style={{ marginRight: "32px" }}>
        <button className="block absolute mt-2" onClick={handleBookmarkClick}>
          {isBookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 hover:text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-babyPowder hover:text-babyPowder" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          )}
        </button>
      </div>
      <img className="w-full h-fit" src={imageUrl} alt={imageUrl} />
      <div className="px-4 py-4">
        <div className="py-4">
          <div className="font-extrabold text-3xl capitalize text-backgroundColor mb-2">{title}</div>
          <p className="text-backgroundColor text-base">
            {description}
          </p>
        </div>
        <div className="inline-block mt-2 mb-2">
          {
            tags.map((tag) => <div className="inline-block bg-khaki rounded-full px-4 py-2 text-sm font-semibold text-backgroundColor" style={{ margin: "2px" }}>{tag}</div>)
          }
        </div>
        <a href={linkTo}><Button
          variant="filled"
          className="text-babyPowder bg-backgroundColor justify-center w-full mt-4"
        >
          <Typography className="items-center capitalize">
            {buttonLabel}
          </Typography>
        </Button>
        </a>
      </div>
    </div>
  )
}
