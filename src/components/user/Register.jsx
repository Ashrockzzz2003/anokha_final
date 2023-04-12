import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../auth/useAuth";

import { collegeData } from "../data"

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isAmrita, setIsAmrita] = React.useState(false);
  const [collegeId, setCollegeId] = React.useState(638);

  if (collegeId in [633, 638, 641, 645]) {
    setIsAmrita(true);
  }

  const [colleges] = useState(collegeData);

  const { signUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp({
      "userEmail": email,
      "collegeId": collegeId,
      "phoneNumber": phone,
      "fullName": name,
      "password": password
    });
  };

  // Set isAmrita to true if the checkbox is checked
  const handleSelect = (e) => {
    setCollegeId(e.target.value);
  }

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
  
  //Regular expression for phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  
  //check if phone numer is valid
  const isPhoneValid = phoneRegex.test(phone);

  // Check if name is valid
  const isNameValid = nameRegex.test(name);

  // Check if confirm password matches password
  const isConfirmPasswordValid = password === confirmPassword;


  return (
    <div className="flex w-screen h-auto items-center justify-center">
      <div className="lg:inline-block items-center justify-center m-auto hidden px-16 relative w-1/2">
        <div className="loader">
          <span>
            <div className="px-10 py-2 h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg"></div>
          </span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="lg:inline-block bg-babyPowder w-fit h-auto flex items-center justify-center lg:w-1/2 ">
        <div className="w-auto px-12 py-8 m-0 bg-babyPowder">
          <img
            src={anokha_circle}
            alt="Anokha circle"
            className="h-24 mr-auto ml-auto mb-4"
          />
          <h1 className="text-5xl font-semibold text-center">Register</h1>
          <p className="font-medium text-lg text-gray-900 mt-4 text-center">
            Welcome! Please enter you details.
          </p>
          <form className="mt-8" onSubmit={handleSignUp}>
            <div className="flex flex-col">
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
            {<div className="flex flex-col mt-4">
                <label className="text-lg text-center font-medium">
                  Select Your College
                </label>
                <div className="text-center">
                  <select className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" onChange={handleSelect}>
                    <option default selected disabled className="text-center">Select your College</option>
                    {colleges.map((college) => {
                      if (college.collegeId === collegeId) {
                        return (
                          <option key={college.collegeId} value={college.collegeId} selected>
                            {college.collegeName}
                          </option>
                        );
                      }
                      else {
                        return (
                          <option key={college.collegeId} value={college.collegeId}>
                            {college.collegeName}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
              </div>}
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
                    "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                    (isEmailValid || !email
                      ? "border-gray-400"
                      : "border-red-500")
                  } text-center placeholder="Enter your Amrita college Email-ID."
                  required
                />
              ) : (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                    (isEmailValid || !email
                      ? "border-gray-400"
                      : "border-red-500")
                  } text-center placeholder="Enter your college Email-ID."
                  required
                />
              )}
              {!isEmailValid && email && (
                <p className="mt-2 text-sm text-red-500">
                  Invalid Email Address
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
            
            
            <div className="flex flex-col mt-4">
              <label className="text-lg text-center font-medium">Password</label>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                  (isPasswordValid || !password
                    ? "border-gray-400"
                    : "border-red-500")
                } text-center placeholder="Enter Password"
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
              <label className="text-lg text-center font-medium">Confirm Password</label>
              <input
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={"w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                  (isConfirmPasswordValid || !confirmPassword
                    ? "border-gray-400"
                    : "border-red-500")
                }
                text-center placeholder="Enter Password again"
                type={"password"}
              />
              {!isConfirmPasswordValid && confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  Password does not match
                </p>
              )}
            </div>
            <div className="mt-8 w-full ml-auto mr-auto flex flex-col gap-y-4">
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
};