import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export default function Cards({
  key,
  title,
  imageUrl,
  description,
  tags,
  buttonLabel,
  linkTo,
  fees,
  date,
  groupOrIndividual,
  departmentAbbr
}) {
  // const [isBookmarked, setIsBookmarked] = useState(false);
  // const handleBookmarkClick = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={imageUrl} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        {/* {isBookmarked ? 
        <IconButton
        onClick={handleBookmarkClick}
        size="sm"
        color="red"
        variant="text"
        className="!absolute top-4 right-4 duration-0 border-none">
        <HeartIcon className="h-6 w-6" />
      </IconButton>
      : 
      <IconButton
          onClick={handleBookmarkClick}
          size="sm"
          color="white"
          variant="text"
          className="!absolute top-4 right-4 duration-0 border-none">
          <HeartIcon className="h-6 w-6" />
        </IconButton>} */}
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-4 pb-4">
          <Chip
            value={`Fees : ₹ ` + fees}
            className="bg-khaki text-backgroundColor"
          />
          <Chip
            value={date}
            className="bg-khaki text-backgroundColor"
          />
          <Chip
            value={departmentAbbr}
            className="bg-khaki text-backgroundColor"
          />
          {/* <Chip value={"Time : " + event.eventTime} className="bg-khaki text-backgroundColor" />
                        <Chip value={"Venue : " + event.venue} className="bg-khaki text-backgroundColor" /> */}
        </div>
        {/* <Typography color="gray">{description}</Typography> */}
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="$129 per night">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <BanknotesIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="And +20 more">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              +20
            </span>
          </Tooltip>
        </div> */}
      </CardBody>
      <CardFooter className="pt-3">
        <a href={linkTo}>
          <Button size="lg" fullWidth={true}>
            {buttonLabel}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

// import { Button, Typography } from '@material-tailwind/react';
// import React from 'react';
// import { useState } from 'react';

// export default function Card({ title, imageUrl, description, tags, buttonLabel, linkTo }) {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   /*
//         "eventId": 1,
//         "eventName": "EVENT0",
//         "eventOrWorkshop": 1,
//         "groupOrIndividual": 1,
//         "maxCount": 1,
//         "description": "DESC0",
//         "url": "https://play-lh.googleusercontent.com/VojafVZNddI6JvdDGWFrRmxc-prrcInL2AuBymsqGoeXjT4f9sv7KnetB-v3iLxk_Koi",
//         "userEmail": "managerEmail1@gmail.com",
//         "date": "24-Mar-2023",
//         "eventTime": "08:14:57",
//         "venue": "VENUE0",
//         "fees": 100,
//         "totalNumberOfSeats": 100,
//         "noOfRegistrations": 0,
//         "timeStamp": "2023-04-04T10:51:47.000Z",
//         "refundable": 0,
//         "departmentAbbr": "DEP0"
//   */

//   const handleBookmarkClick = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     // Card component with tags, title, bookmark button, and description, buttons for registration
//     <div className="hover:scale-105 hover:rounded-3xl rounded-2xl overflow-hidden shadow-lg bg-babyPowder m-4 text-center">
//       <div className='w-fit ml-auto' style={{ marginRight: "32px" }}>
//         <button className="block absolute mt-2" onClick={handleBookmarkClick}>
//           {isBookmarked ? (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 hover:text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-babyPowder hover:text-babyPowder" viewBox="0 0 20 20" fill="none" stroke="currentColor">
//               <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
//             </svg>
//           )}
//         </button>
//       </div>
//       <img className="w-full h-fit" src={imageUrl} alt={imageUrl} />
//       <div className="px-4 py-4">
//         <div className="py-4">
//           <div className="font-extrabold text-3xl capitalize text-backgroundColor mb-2">{title}</div>
//           <p className="text-backgroundColor text-base">
//             {description}
//           </p>
//         </div>
//         <div className="inline-block mt-2 mb-2">
//           {
//             tags.map((tag) => <div className="inline-block bg-khaki rounded-full px-4 py-2 text-sm font-semibold text-backgroundColor" style={{ margin: "2px" }}>{tag}</div>)
//           }
//         </div>
//         <a href={linkTo}><Button
//           variant="filled"
//           className="text-babyPowder bg-backgroundColor justify-center w-full mt-4"
//         >
//           <Typography className="items-center capitalize">
//             {buttonLabel}
//           </Typography>
//         </Button>
//         </a>
//       </div>
//     </div>
//   )
// }
