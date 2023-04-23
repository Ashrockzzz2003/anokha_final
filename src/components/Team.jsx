import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import dallas from "./utils/circle_selected.svg";

const TeamData = {
    "Heads": [
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        }
    ],
    "Web Team": [
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        }
    ],
    "Multimedia Team": [
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        }
    ],
    "Documentation Team": [
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        },
        {
            "image_url": "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg",
            "name": "Vira Manohar",
            "position": "Lead, WMD",
        }
    ]
}

function TeamCard({ image_url, name, position }) {
    return (
        <Card className="w-48">
            <img src={image_url} alt="profile" className="max-h-2/3 h-2/3 rounded-t-xl" />
            <CardBody className="text-center p-2">
                <Typography variant="h4" className="text-backgroundColor">
                    {name}
                </Typography>
                <Typography className="font-medium text-coquelicot" textGradient>
                    {position}
                </Typography>
            </CardBody>
        </Card>
    )
}

export default function Team() {
    return (
        <div className="mt-16">
            <Typography
                variant="h1"
                className="mb-2 pt-8 text-2xl md:text-4xl  lg:text-6xl text-lime-50 text-center"
            >
                The Team
            </Typography>
            <div className="block justify-center">
                {
                    Object.keys(TeamData).map((team) => {
                        return (
                            <div className="flex flex-col items-center">
                                <div className="flex flex-row gap-3">
                                    <img src={dallas} alt="dallas" />
                                    <Typography
                                        className="mb-8 pt-8 text-xl md:text-2xl  lg:text-3xl text-lime-50 text-center"
                                    >
                                        {team}
                                    </Typography>
                                </div>
                                <div className="flex flex-wrap gap-8 pb-2 justify-center m-4">
                                    {
                                        TeamData[team].map((teamMember) => (
                                            <TeamCard
                                                key={teamMember.image_url}
                                                image_url={teamMember.image_url}
                                                name={teamMember.name}
                                                position={teamMember.position}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}