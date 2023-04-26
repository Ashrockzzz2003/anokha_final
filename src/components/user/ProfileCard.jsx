import QRCode from "react-qr-code";
import { MD5 } from "crypto-js";

export default function ProfileCard({ fullName, userEmail, qrlink, passportID }) {
  const hash = MD5(userEmail + userEmail);
  return (

    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-2 ml-2" >
      <img src={`https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash`} alt="Profile" width={200} className="rounded-lg"></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fullName}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{userEmail}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-extrabold">Passport ID</span> : {!passportID ? <span className="text-red-500">Buy passport</span> : <span className="text-green-500">{passportID}</span>}</p>
      </div>
      <QRCode title="Passport QR" value={qrlink} size={50} level="L" className="object-cover w-full rounded-b-lg p-6 h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" />
    </div>
  );
}