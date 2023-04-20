import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";

import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { Checkbox, Typography } from "@material-tailwind/react";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [collegeName, setCollegeName] = React.useState("Amrita Vishwa Vidyapeetham");
  const [isAmrita, setisAmrita] = React.useState(true);

  const { signUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isAmritaMail && !isAmrita) {
      alert("Please check the checkbox if you are an Amrita Coimbatore/Amaravati student");
      return;
    }

    if (isAmrita && !isAmritaMail) {
      alert("Please enter your Amrita Coimbatore/Amaravati email");
      return;
    }

    // if (!collegeName.includes("Amrita Vishwa Vidyapeetham") && isAmrita) {
    //   alert("Please uncheck the checkbox if you are not an Amrita Coimbatore/Amaravati student");
    //   return;
    // }

    signUp({
      "userEmail": email,
      "collegeName": collegeName,
      "phoneNumber": phone,
      "fullName": name,
      "password": password
    });
  };

  // Set isAmrita to true if the checkbox is checked
  const handleAmrita = (e) => {
    setisAmrita(e.target.checked);
    if (e.target.checked) {
      setCollegeName("Amrita Vishwa Vidyapeetham");
    }
    else {
      setCollegeName("");
    }
  };

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for password validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //Regular expression to check amrita mail 
  const amritaRegex = /^[a-zA-Z0-9._%+-]+@(cb\.students\.amrita\.edu|cb\.amrita\.edu|av\.students\.amrita\.edu|av\.amrita\.edu)$/;

  // Check if email is valid
  const isEmailValid = emailRegex.test(email);

  //check if amrita mail or not
  const isAmritaMail = amritaRegex.test(email);

  // Regular expression for name validation max 25 chars
  const nameRegex = /^[a-zA-Z ]{1,25}$/;

  // Regular expression for college name validation max 100 chars
  const collegeNameRegex = /^[a-zA-Z ,-]{1,100}$/;

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

  // Check if college name is valid
  const isCollegeNameValid = collegeNameRegex.test(collegeName);




  return (
    <div className="flex w-full h-full items-center justify-center">
      {/* <div className="lg:inline-block items-center justify-center m-auto hidden px-16 relative w-1/2">
        <div className="loader">
          <span>
            <div className="px-10 py-2 h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg"></div>
          </span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <div className="lg:inline-block bg-babyPowder w-full md:h-[100vh] flex items-center justify-center lg:w-1/2 ">
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
            <div className="flex flex-col items-center mt-4">
              <Checkbox
                defaultChecked={isAmrita}
                onChange={handleAmrita}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal">
                    Amrita Coimbatore/Amaravati Student
                  </Typography>
                }
                value={isAmrita}
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg text-center font-medium">Name</label>
              <input
                value={name}
                autoCapitalize="none"
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
            <div className="flex flex-col mt-4">
              <label className="text-lg text-center font-medium">College Name</label>
              <input
                value={collegeName}
                autoCapitalize="none"
                onChange={(e) => setCollegeName(e.target.value)}
                className={"w-full justify-center ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700"
                  + (isCollegeNameValid || !collegeName
                    ? "border-gray-400"
                    : "border-red-500")}
                text-center placeholder="Enter your Full Name"
                required
              />
              {!isCollegeNameValid && collegeName && (
                <p className="mt-2 text-sm text-red-500 text-center">
                  Invalid College Name. Only letters, commas and hiphens are allowed.
                </p>
              )}
            </div>
            <div className="flex text-center flex-col mt-4">
              {isAmrita ? (
                <label className="text-lg font-medium">Amrita Email ID<br /><span className=" text-red-500">(Please enter Amrita Email ID if Amrita Coimbatore/Amaravati Student)</span></label>
              ) : (
                <label className="text-lg font-medium">Email<br /><span className=" text-red-500">(Please enter Amrita Email ID if Amrita Coimbatore/Amaravati Student)</span></label>
              )}
              {isAmrita ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    "w-full ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                    (isAmritaMail || !email
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

              {isAmrita ? (
                !isAmritaMail && email && (
                  <p className="mt-2 text-sm text-red-500">
                    Invalid Amrita Email Address
                  </p>
                )
              ) : (
                !isEmailValid && email && (
                  <p className="mt-2 text-sm text-red-500">
                    Invalid Email Address
                  </p>
                )
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
            <div className="mt-4 text-center">
              {
                isAmrita ? (
                  <button
                    type="submit"
                    className={
                      "py-4 w-full rounded-md text-white font-medium " +
                      (isAmritaMail && isPasswordValid
                        ? "bg-backgroundColor"
                        : "bg-gray-400 cursor-not-allowed")
                    }
                    disabled={!isAmritaMail || !isPasswordValid}>
                    Register
                  </button>
                ) : (<button
                  type="submit"
                  className={
                    "py-4 w-full rounded-md text-white font-medium " +
                    (isEmailValid && isPasswordValid
                      ? "bg-backgroundColor"
                      : "bg-gray-400 cursor-not-allowed")
                  }
                  disabled={!isEmailValid || !isPasswordValid}>
                  Register
                </button>)
              }
            </div>
          </form>
          <div className="mt-8 flex text-center justify-center items-center">
            <Link to="/AccommodationInfo">
              <button className="ml-2 font-medium text-base text-center text-backgroundColor underline">
                Click here to read about accommodation
              </button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <Link to="/login">
              <button className="ml-2 font-medium text-base text-backgroundColor underline">
                Login
              </button>
            </Link>
          </div>
          <div className="mt-1 flex justify-center items-center">
            <Link to="/">
              <button className="ml-2 font-medium text-base text-backgroundColor underline">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};