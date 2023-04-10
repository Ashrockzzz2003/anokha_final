import { Typography } from "@material-tailwind/react";
import React from "react";
import eventide from "../utils/eventide.png";
import RegisterMembers from "../events/RegisterMembers";
import ConfirmPaymentPage from "../user/ConfirmPaymentPage.jsx";

const EventLanding = () => {
  const data = {
    "orderID": "order_DBJOWzybf0sJbb",
    "amount": 50000,
    "eventName": "Eventide",
    "fullName": "Vira Manohar aka LEGEND",
    "email": "vira_manohar_legend@cb.students.amrita.edu",
  }

  
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

  return (
    <div className="w-full block items-center justify-center lg:flex lg:justify-center pb-32 pt-32">
      <div className="w-auto lg:pr-12">
        <img src={eventide} className="w-72 rounded-lg ml-auto mr-auto" alt="Event Pix" />
         <div className="mt-4 w-fit ml-auto mr-auto">
          <RegisterMembers membercount={4} amount={500} buttonLabel={"Register with Members"} />
        </div>
        <div className="mt-4 w-fit ml-auto mr-auto">
          <ConfirmPaymentPage orderID={data.orderID} amount={data.amount} eventName={data.eventName} fullName={data.fullName} email={data.email} buttonLabel={"Buy Passport"} />
        </div>
      </div>
      <div className="m-16 mt-24 lg:pl-24 lg:ml-16 lg:w-1/2">
        <Typography variant="h1" className="mb-4 text-khaki text-left">
          Passport Detail
        </Typography>
        <Typography variant="h4" className="mb-16 text-khaki text-left">
          Tagline
        </Typography>
        <Typography variant="paragraph" className="mb-16 text-babyPowder text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex ullam, ipsum minima, maxime cum optio quod unde a fugiat numquam quaerat voluptatum iure aliquid et dolorem eius dolore dolorum!
          Animi sapiente doloribus vel numquam officia. Sit, aspernatur expedita. Ducimus voluptate, a nesciunt accusantium hic aut soluta, id amet unde, optio incidunt odio perferendis nulla. Quibusdam voluptatem distinctio excepturi soluta?
          Eum nesciunt architecto fugiat rem reprehenderit nobis voluptate alias, in et accusantium itaque pariatur eveniet, qui ea! Delectus omnis soluta possimus! Sit aliquam natus illo quas ratione, mollitia quibusdam dolorum!
          Placeat eligendi nobis ipsam autem hic pariatur asperiores recusandae optio minus? Voluptatum rerum totam quibusdam aperiam inventore nobis consequuntur fugit praesentium, amet laboriosam. Ut, dolorem. Ab fugit ipsum aperiam perspiciatis?
          Totam beatae temporibus laboriosam assumenda, veritatis nesciunt molestiae cupiditate modi esse placeat enim non, quo veniam soluta debitis iusto optio tempore id architecto magnam dolorem itaque laborum. Magni, excepturi doloremque?
          Aperiam ut aut dolor esse nobis voluptate autem fugiat, dolore laborum error nulla harum quae, optio provident. Eius error, nulla quidem vero officiis eligendi expedita impedit magnam rerum. Error, beatae?
        </Typography>
      </div>
    </div>
  );
};

export default EventLanding;