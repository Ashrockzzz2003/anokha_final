import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import dallas from "./utils/circle_selected.svg";


function TeamCard({ image_url, name, role, departmentname }) {
    return (
        <Card className="w-48">
            <img src={image_url} alt="profile" className="max-h-2/3 h-2/3 rounded-t-xl" />
            <CardBody className="text-center p-2">
                <Typography variant="h4" className="text-backgroundColor">
                    {name}
                </Typography>
                <Typography className=" font-extralight text-backgroundColor" textGradient>
                    {departmentname}
                </Typography>
                <Typography className="font-medium text-coquelicot" textGradient>
                    {role}
                </Typography>
            </CardBody>
        </Card>
    )
}

export default function Team() {
    const [TeamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch("https://anokha.amrita.edu/api/userWeb/getCrew")
            .then((response) => response.json())
            .then((data) => setTeamData(data));
    }, []);

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
                    TeamData.length ? (TeamData.map((team) => {
                        return (
                            <div className="flex flex-col items-center">
                                <div className="flex flex-row gap-3">
                                    <img src={dallas} alt="dallas" />
                                    <Typography
                                        className="mb-8 pt-8 text-xl md:text-2xl  lg:text-3xl text-lime-50 text-center"
                                    >
                                        {team.teamName}
                                    </Typography>
                                </div>
                                <div className="flex flex-wrap gap-8 pb-2 justify-center m-4">
                                    {
                                        team.member.map((teamMember) => (
                                            <TeamCard
                                                key={teamMember.crewEmail}
                                                image_url={teamMember.url}
                                                name={teamMember.name}
                                                departmentname={teamMember.departmentname}
                                                role={teamMember.role}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })) : (
                        <Typography
                            variant="h6"
                            className="mb-2 text-red-100 text-center"
                        >
                            Coming soon...
                        </Typography>
                    )
                }
            </div>
        </div>
    );
}