import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../auth/useAuth";
import secureLocalStorage from "react-secure-storage";

export default function Register() {
    // Fetch Data
    const tempData = useState(secureLocalStorage.getItem("userData"));
    const data = JSON.parse(tempData[0])[0];
    const [name, setName] = React.useState(data.fullName);
    const [email, setEmail] = React.useState(data.userEmail);
    const [phone, setPhone] = React.useState(data.phoneNumber);
    const [isAmrita, setIsAmrita] = React.useState(data.isAmritaCBE === 1 ? true : false);

    // Set isAmrita to true if the checkbox is checked
    const handleAmrita = () => {
        setIsAmrita(!isAmrita);
    };


    // Regular expression for name validation
    const nameRegex = /.*/;

    //Regular expression for phone number validation
    const phoneRegex = /^[0-9]{10}$/;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check if email is valid
    const isEmailValid = emailRegex.test(email);


    //check if phone numer is valid
    const isPhoneValid = phoneRegex.test(phone);

    // Check if name is valid
    const isNameValid = nameRegex.test(name);

    const { editProfile } = useAuth();

    // Handle Edit Profile
    const handleEditProfile = (e) => {
        e.preventDefault();
        editProfile({
            fullName: name,
            phoneNumber: phone,
            userEmail: secureLocalStorage.getItem("userEmail"),
        });
    };


    return (
        <div className="flex w-screen h-screen items-center justify-center">

            <div className="lg:inline-block bg-babyPowder w-full h-full flex items-center justify-center lg:w-1/2 ">
                <div className="w-auto px-12 py-12 m-0 bg-babyPowder">
                    <img
                        src={anokha_circle}
                        alt="Anokha circle"
                        className="h-24 mr-auto ml-auto mb-4"
                    />
                    <h1 className="text-5xl font-semibold text-center">Edit Profile</h1>
                    <p className="font-medium text-lg text-gray-900 mt-4 text-center">
                        Update your details here.
                    </p>
                    <form className="mt-8" onSubmit={handleEditProfile}>


                        <div className="flex flex-col mt-4">
                            <label className="text-lg text-center font-medium">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={"w-full justify-center ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700"
                                    + (isNameValid || !name
                                        ? "border-gray-400"
                                        : "border-red-500")}
                                text-center placeholder="Enter your Full Name"
                                required
                            />
                            {!isNameValid && name && (
                                <p className="mt-2 text-sm text-red-500">
                                    Invalid Name
                                </p>
                            )}
                        </div>

                        <div className="flex text-center flex-col mt-4">
                            <label className="text-lg text-center font-medium">Phone Number</label>
                            <input
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={
                                    "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                                    (isPhoneValid || !phone
                                        ? "border-gray-400"
                                        : "border-red-500")
                                } text-center placeholder="Enter Phone Number"
                                type={"number"}
                                maxLength={10}
                            />
                            {!isPhoneValid && phone && (
                                <p className="mt-2 text-sm text-center text-red-500">
                                    Enter a valid phone number.
                                </p>
                            )}
                        </div>

                        <div className="flex text-center flex-col mt-4">
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
                                        "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-khaki text-center placeholder:text-gray-700" +
                                        (isEmailValid || !email
                                            ? "border-gray-400"
                                            : "border-red-500")
                                    } text-center placeholder="Enter your Amrita college Email-ID."
                                    required
                                    disabled
                                />
                            ) : (
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={
                                        "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-khaki text-center placeholder:text-gray-700" +
                                        (isEmailValid || !email
                                            ? "border-gray-400"
                                            : "border-red-500")
                                    } text-center placeholder="Enter your college Email-ID."
                                    required
                                    disabled
                                />
                            )}
                            {!isEmailValid && email && (
                                <p className="mt-2 text-sm text-red-500">
                                    Invalid Email Address
                                </p>
                            )}
                        </div>
                        <div className="mt-8 w-full ml-auto mr-auto flex flex-col gap-y-4">
                            <button
                                type="submit"
                                className={"active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-backgroundColor rounded-xl text-babyPowder font-bold text-lg"}>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}