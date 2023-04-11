import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";


export default function ProfileCard({ fullName, userEmail, qrlink }) {
  return (
    
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fullName}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{userEmail}</p>
    </div>
    <img src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" className="object-cover w-full rounded-b-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" alt="" />
</div>
    
    
    // <div className="py-32">
    //   <Card className="w-fit ml-auto mr-auto">
    //     <CardHeader floated={false} className="flex flex-col lg:flex-row justify-evenly">
    //       <img className="w-72 ml-auto mr-auto lg:ml-0 lg:mr-0" src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" alt="dummy-qr" />
    //       {/* <QRCode title="profile-qr" value={qrlink} size={50} level="L" /> */}
    //     </CardHeader>
    //     <CardBody className="text-center">
    //       <Typography variant="h4" color="blue-gray" className="mb-2">
    //         {fullName}
    //       </Typography>
    //       <Typography className="font-thin" color="blue">
    //         {userEmail}
    //       </Typography>
    //     </CardBody>
    //   </Card>
    // </div>
  );
}