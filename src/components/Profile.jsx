import { useState } from 'react';
import ProfileCard from './user/ProfileCard';
import EventsRegistered from "./user/EventsRegistered";

const Profile = () => {

  /*
  const { getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  })
  */

  const [data] = useState(JSON.parse(localStorage.getItem("userData")));

  return (
    <div className='flex flex-col justify-evenly items-center'>
      <ProfileCard userEmail={data.userEmail} fullName={data.fullName} />
      <EventsRegistered />
    </div>
  )
}

export default Profile