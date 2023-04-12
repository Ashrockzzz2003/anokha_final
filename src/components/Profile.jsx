import { useState } from 'react';
import ProfileCard from './user/ProfileCard';
import EventsRegistered from "./user/EventsRegistered";
import  secureLocalStorage  from  "react-secure-storage";

const Profile = () => {
  const data = useState(secureLocalStorage.getItem("userData"));
  const tempData = JSON.parse(data[0])[0];
  

  return (
    <div className='flex flex-col justify-center items-center pt-32'>
      <ProfileCard userEmail={tempData.userEmail} fullName={tempData.fullName} passportId={tempData.passportId} qrlink={`http://52.66.236.118:3000/adminApp/verifyUser/${tempData.userEmail}`}/>
      <EventsRegistered />
    </div>
  )
}

export default Profile