import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import { useAuth } from "../../auth/useAuth";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  // const [oldPassword, setOldPassword] = React.useState('');
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const {newPasswordReset} = useAuth();

  const { resetToken } = useParams();

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    newPasswordReset(password, resetToken);
  }

  const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
  const isPasswordValid = passwordRegex.test(password);
  const isConfirmPasswordValid = password === confirmPassword;
  
  return (
    <div className="flex w-full h-full align-middle mt-32">
      
      <div className="w-fit ml-auto mr-auto flex items-center justify-center lg:w-full mb-10">
        <div className="w-11/12 max-w-[600px] px-10 py-10 rounded-3xl shadow-xl bg-babyPowder border-khaki border-2">
          <img
            src={anokha_circle}
            alt="Anokha circle"
            className="animate-spin h-24 ml-auto mr-auto mb-4"
          />
          <h1 className="text-5xl font-semibold text-center">Reset Password</h1>
          <div className="mt-8">
            <form onSubmit={handleReset}>
              {/* <div className="flex flex-col mt-4">
                <label className="text-lg font-medium">Old Password</label>
                <input
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700"
                  placeholder="Enter Password"
                  type={"password"}
                  required
                />
              </div> */}
              <div className="flex flex-col mt-4">
              <label className="text-lg text-center font-medium">New Password</label>
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
              <label className="text-lg text-center font-medium">Confirm New Password</label>
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
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-backgroundColor rounded-xl text-babyPowder font-bold text-lg">
                  Reset Password
                </button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
}