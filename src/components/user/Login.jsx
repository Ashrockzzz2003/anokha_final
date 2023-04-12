import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import {Link} from "react-router-dom";
import {Checkbox, Typography} from "@material-tailwind/react";
import {useAuth} from "../../auth/useAuth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAmrita, setIsAmrita] = React.useState(true);

  // handleLogin with useAuth
  const {signIn} = useAuth();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    signIn({
      email: email,
      password: password,
    });
  };

  // Set isAmrita to true if the checkbox is checked
  const handleAmrita = () => {
    setIsAmrita(!isAmrita);
  };

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

  // Check if email is valid
  const isEmailValid = emailRegex.test(email);

  // Check if password is valid
  const isPasswordValid = passwordRegex.test(password);

  return (
    <div className="flex w-full h-full justify-center items-center">
      {/* <div className="lg:inline-block items-center justify-center m-auto hidden px-16 relative w-1/2">
        <div className="loader">
          <span>
            <div className="h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg">
              <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              molestiae ipsum sit qui velit perspiciatis impedit odio? Sed
              </Typography>
            </div>
          </span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <div className="lg:inline-block bg-babyPowder w-full md:h-[100vh] flex justify-center lg:w-1/2 ">
        <div className="px-20 py-32 items-center bg-babyPowder">
          <img
            src={anokha_circle}
            alt="Anokha circle"
            className="h-24 mr-auto ml-auto mb-4"
          />
          <h1 className="text-5xl font-semibold text-center">Login</h1>
          <p className="font-medium text-lg text-gray-900 mt-4 text-center">
            Welcome back! Please enter your details.
          </p>
          <div className="mt-4">
            <form onSubmit={handleLogin}>
              
              <div className="flex flex-col mt-4">
                
                  <label className="text-lg text-center font-medium">
                    Email ID
                  </label>
                
              </div>
              <div className="mt-2 text-center">
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoCapitalize="none"
                  placeholder="Email"
                  className={
                    "w-5/6 border-2 text-center border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                    (isEmailValid || !email
                      ? "border-gray-400"
                      : "border-red-500")
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isEmailValid && email && (
                  <p className="mt-2 text-sm text-center text-red-500">
                    Invalid Email Address
                  </p>
                )}
              </div>
              <div className="mt-4 text-center">
                <label className="text-lg font-medium">Password</label>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={
                      "w-5/6 border-2 border-gray-700 text-center rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700" +
                      (isPasswordValid || !password
                        ? "border-gray-400"
                        : "border-red-500")
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!isPasswordValid && password && (
                    <p className="mt-2 text-sm text-red-500">
                      Password must be at least 8 characters long and contain at
                      least one uppercase letter, one lowercase letter, and one
                      number
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className={
                    "py-4 w-3/6 rounded-md text-white font-medium " +
                    (isEmailValid && isPasswordValid
                      ? "bg-backgroundColor"
                      : "bg-gray-400 cursor-not-allowed")
                  }
                  disabled={!isEmailValid || !isPasswordValid}>
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-backgroundColor font-medium">
                  Register here.
                </Link>
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Forgot Password?{" "}
                <Link
                  to="/forgotpassword"
                  className="text-backgroundColor font-medium">
                  Reset here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
