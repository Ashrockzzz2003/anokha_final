import { useState } from 'react';
import ProfileCard from './user/ProfileCard';
import EventsRegistered from "./user/EventsRegistered";

const Profile = () => {
  const data = useState(localStorage.getItem("userData"));
  const tempData = JSON.parse(data[0])[0];

  return (
    <div className='flex flex-col justify-evenly items-center'>
      <ProfileCard userEmail={tempData.userEmail} fullName={tempData.fullName} />
      <EventsRegistered />
    </div>
  )
}

export default Profile