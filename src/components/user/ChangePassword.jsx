import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import { useAuth } from "../../auth/useAuth";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  // const [oldPassword, setOldPassword] = React.useState('');
  const [NewPassword, setNewPassword] = React.useState('');
  const [reEnteredPassword, setReEnteredPassword] = React.useState('');

  const {newPasswordReset} = useAuth();

  const { resetToken } = useParams();

  const handleReset = (e) => {
    e.preventDefault();
    if (NewPassword !== reEnteredPassword) {
      alert("Passwords don't match");
      return;
    }
    newPasswordReset(NewPassword, resetToken);
  }
  
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
                <label className="text-lg font-medium">New Password</label>
                <input
                  value={NewPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700"
                  placeholder="Enter Password"
                  type={"password"}
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-lg font-medium">Re-Enter New Password</label>
                <input
                  value={reEnteredPassword}
                  onChange={(e) => setReEnteredPassword(e.target.value)}
                  className="w-full border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent placeholder:text-gray-700"
                  placeholder="Re-Enter New Password"
                  type={"password"}
                  required
                />
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