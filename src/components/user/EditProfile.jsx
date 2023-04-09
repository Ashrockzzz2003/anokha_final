import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import {
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";

function CollegeList({ defaultSelectedValue }) {
    const API_URL =
        "http://universities.hipolabs.com/search?country=india";
    const [colleges, setColleges] = useState([]);

    const fetchCollegeData = () => {
        fetch(`${API_URL}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setColleges(data);
            });
    };

    useEffect(() => {
        fetchCollegeData();
    }, []);



    return (
        <select className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" defaultValue={defaultSelectedValue}>
            <option disabled>Select your College</option>
            {colleges.map((college) => {
                return (
                    <option key={college.name} value={college.name}>
                        {college.name}
                    </option>
                );
            })}
        </select>
    );
}

export default function EditProfile() {

    const data = JSON.parse(localStorage.getItem("userData"));

    // console.log(data);

    const [name, setName] = React.useState(data.fullName);
    const [email, setEmail] = React.useState(data.userEmail);
    const [isAmrita, setIsAmrita] = React.useState(data.isAmritaCBE);

    // Set isAmrita to true if the checkbox is checked
    const handleAmrita = () => {
        setIsAmrita(!isAmrita);
    };

    return (
        <div className="flex w-full h-full align-middle mt-32">
            <div className="lg:block items-center justify-center m-auto hidden px-16 relative w-1/2">
                <div className="loader">
                    <span>
                        <div className="px-10 py-20 h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg"></div>
                    </span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="w-11/12 ml-auto mr-auto flex items-center justify-center lg:w-full mb-10">
                <div className="w-full lg:w-11/12 max-w-[600px] px-12 py-12 rounded-3xl shadow-xl bg-babyPowder border-khaki border-2">
                    <img
                        src={anokha_circle}
                        alt="Anokha circle"
                        className="animate-spin h-24 ml-auto mr-auto mb-4"
                    />
                    <h1 className="text-5xl font-semibold text-center">Edit Profile</h1>
                    <p className="font-medium text-lg text-gray-900 mt-4 text-center">
                        Update your details.
                    </p>
                    <form className="mt-8">
                    <div className="flex flex-col mt-4">
                            <Checkbox
                                required
                                defaultChecked={isAmrita}
                                onChange={handleAmrita}
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal">
                                        Amrita Student
                                    </Typography>
                                }
                                value={isAmrita}
                                containerProps={{ className: "-ml-2.5" }}
                            />
                        </div>
                        {!isAmrita ? (
                            <div className="flex flex-col mt-4">
                                <label className="text-lg font-medium">
                                    Select Your College
                                </label>
                                <CollegeList defaultSelectedValue={data.collegeName} />
                            </div>
                        ) : null}
                        <div className="flex flex-col mt-4">
                            {isAmrita ? (
                                <label className="text-lg font-medium">Amrita Email ID</label>
                            ) : (
                                <label className="text-lg font-medium">Email</label>
                            )}
                            {isAmrita ? (
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-khaki border-2 border-gray-700 rounded-xl p-4 mt-1 placeholder:text-gray-700"
                                    placeholder="Enter your Amrita college Email-ID."
                                    required
                                    disabled
                                />
                            ) : (
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-khaki border-2 border-gray-700 rounded-xl p-4 mt-1 placeholder:text-gray-700"
                                    placeholder="Enter your college Email-ID."
                                    required
                                    disabled
                                />
                            )}
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700"
                                placeholder="Enter your Full Name"
                                required
                            />
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                type="submit"
                                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-backgroundColor rounded-xl text-babyPowder font-bold text-lg">
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}