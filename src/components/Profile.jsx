import { useState } from 'react';
import ProfileCard from './user/ProfileCard';
import EventsRegistered from "./user/EventsRegistered";
import secureLocalStorage from "react-secure-storage";
import { Typography } from '@material-tailwind/react';

const Profile = () => {
  const data = useState(secureLocalStorage.getItem("userData"));
  const tempData = JSON.parse(data[0])[0];


  return (
    <div className='flex flex-col justify-center items-center pt-32'>
      <ProfileCard userEmail={tempData.userEmail} fullName={tempData.fullName} passportID={tempData.passportId} qrlink={`https://anokha.amrita.edu/api/adminApp/verifyUser/${tempData.userEmail}`} />
      <Typography
        variant="h1"
        className="mb-2 pt-8 text-xl md:text-2xl  lg:text-4xl text-lime-50 text-center"
      >
        Registered Events/Workshops
      </Typography>
      <Typography
        variant="h6"
        className="mb-2 text-red-100 text-center"
      >
        Show the QRCode for the event for entry.
      </Typography>
      <EventsRegistered userEmail={tempData.userEmail} />
    </div>
  )
}

export default Profile