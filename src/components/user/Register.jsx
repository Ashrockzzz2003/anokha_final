import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import { Link } from "react-router-dom";
import { Checkbox, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";

function CollegeList() {
   const API_URL =
        "http://52.66.236.118:3000/userWeb/getAllColleges";
    const [colleges, setColleges] = useState([]);

    const fetchCollegeData = async () => {
        await
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
        <select className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700">
            <option default selected disabled>Select your College</option>
            {colleges.map((college) => {
                return (
                    <option key={college.collegeId} value={college.collegeId}>
                        {college.collegeName}
                    </option>
                );
            })}
        </select>
    );
}

export default function Register() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isAmrita, setIsAmrita] = React.useState(true);

    // Set isAmrita to true if the checkbox is checked
    const handleAmrita = () => {
        setIsAmrita(!isAmrita);
    };

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // Check if email is valid
    const isEmailValid = emailRegex.test(email);

    // Regular expression for name validation
    const nameRegex = /^[a-zA-Z ]+$/;

    // Check if password is valid
    const isPasswordValid = passwordRegex.test(password);

    // Check if name is valid
    const isNameValid = nameRegex.test(name);

    // Check if confirm password matches password
    const isConfirmPasswordValid = password === confirmPassword;


    return (
        <div className="flex w-screen h-auto items-center justify-center">
            <div className="lg:block items-center justify-center m-auto hidden px-16 relative w-1/2">
                <div className="loader">
                    <span>
                        <div className="px-10 py-2 h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg"></div>
                    </span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="w-fit flex items-center justify-center lg:w-full mb-10">
                <div className="w-full lg:w-11/12 max-w-[600px] px-12 py-12 rounded-3xl shadow-xl bg-babyPowder border-khaki border-2">
                    <img
                        src={anokha_circle}
                        alt="Anokha circle"
                        className="animate-spin h-24 ml-auto mr-auto mb-4"
                    />
                    <h1 className="text-5xl font-semibold text-center">Register</h1>
                    <p className="font-medium text-lg text-gray-900 mt-4 text-left">
                        Welcome! Please enter you details.
                    </p>
                    <form className="mt-8">
                        <div className="flex flex-col">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={"w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700"
                                    + (isNameValid || !name
                                        ? "border-gray-400"
                                        : "border-red-500")}
                                placeholder="Enter your Full Name"
                                required
                            />
                            {!isNameValid && name && (
                                <p className="mt-2 text-sm text-red-500">
                                    Invalid Name
                                </p>
                            )}
                        </div>
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
                                <CollegeList />
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
                                    className={
                                        "w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                                        (isEmailValid || !email
                                            ? "border-gray-400"
                                            : "border-red-500")
                                    } placeholder="Enter your Amrita college Email-ID."
                                    required
                                />
                            ) : (
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={
                                        "w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                                        (isEmailValid || !email
                                            ? "border-gray-400"
                                            : "border-red-500")
                                    } placeholder="Enter your college Email-ID."
                                    required
                                />
                            )}
                            {!isEmailValid && email && (
                                <p className="mt-2 text-sm text-red-500">
                                    Invalid Email Address
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg font-medium">Password</label>
                            <input
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={
                                    "w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                                    (isPasswordValid || !password
                                        ? "border-gray-400"
                                        : "border-red-500")
                                } placeholder="Enter Password"
                                type={"password"}
                            />
                            {!isPasswordValid && password && (
                                <p className="mt-2 text-sm text-red-500">
                                    Password must be at least 8 characters long and contain at
                                    least one uppercase letter, one lowercase letter, and one
                                    number
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg font-medium">Confirm Password</label>
                            <input
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={"w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                                    (isConfirmPasswordValid || !confirmPassword
                                        ? "border-gray-400"
                                        : "border-red-500")
                                }
                                placeholder="Enter Password again"
                                type={"password"}
                            />
                            {!isConfirmPasswordValid && confirmPassword && (
                                <p className="mt-2 text-sm text-red-500">
                                    Password does not match
                                </p>
                            )}
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                type="submit"
                                className={"active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-backgroundColor rounded-xl text-babyPowder font-bold text-lg" + (isEmailValid && isPasswordValid
                                    ? "bg-backgroundColor"
                                    : "bg-gray-400 cursor-not-allowed")}
                                disabled={!isEmailValid || !isPasswordValid}>
                                Register
                            </button>
                        </div>
                        <div className="mt-8 flex justify-center items-center">
                            <p className="font-medium text-base">Already have an account?</p>
                            <Link to="/login">
                                <button className="ml-2 font-medium text-base text-backgroundColor underline">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
