import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import QRCode from "react-qr-code";

export default function RCard({
    title,
    buttonLabel,
    linkTo,
    fees,
    date,
    qrlink,
    departmentAbbr,
    eventOrWorkshop
}) {
    return (
        <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
                <QRCode title={`${title} QR Code`} value={qrlink} size={50} level="L" className="w-full h-full" />
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {title}
                    </Typography>
                </div>
                <div className="flex flex-wrap gap-2 pb-2">
                    <Chip
                        value={`Fees : ₹ ` + fees}
                        className="bg-khaki text-backgroundColor hover:scale-105 hover:rounded-xl"
                    />
                    {
                        eventOrWorkshop === 0 ? (<Chip
                            value={"EVENT"}
                            className="bg-khaki text-backgroundColor hover:scale-105 hover:rounded-xl"
                        />) : (<Chip
                            value={"WORKSHOP"}
                            className="bg-khaki text-backgroundColor hover:scale-105 hover:rounded-xl"
                        />)
                    }
                    <Chip
                        value={date}
                        className="bg-khaki text-backgroundColor hover:scale-105 hover:rounded-xl"
                    />
                    <Chip
                        value={departmentAbbr}
                        className="bg-khaki text-backgroundColor hover:scale-105 hover:rounded-xl"
                    />
                </div>
            </CardBody>
            <CardFooter className="pt-1">
                <a href={linkTo}>
                    <Button size="lg" fullWidth={true} className="bg-backgroundColor">
                        {buttonLabel}
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}