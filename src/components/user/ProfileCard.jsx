import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";


export default function ProfileCard({ fullName, userEmail }) {
  return (
    <div className="py-32">
      <Card className="w-fit ml-auto mr-auto">
        <CardHeader floated={false} className="flex flex-col lg:flex-row justify-evenly">
          <img className="w-72 ml-auto mr-auto lg:ml-0 lg:mr-0" src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg" alt="dummy-qr" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {fullName}
          </Typography>
          <Typography className="font-thin" color="blue">
            {userEmail}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}