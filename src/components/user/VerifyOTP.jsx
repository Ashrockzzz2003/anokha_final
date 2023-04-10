import * as React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import "../styles/form.css";
import { useAuth } from "../../auth/useAuth";

export default function VerifyOTP() {
    const [otp, setOTP] = React.useState("");

    const { verifyOTP } = useAuth();

    // Handle Edit Profile
    const handleOTP = (e) => {
        e.preventDefault();
        verifyOTP(otp);
    };

    return (
        <div className="flex w-screen h-screen align-middle items-center justify-center">
            <div className="lg:inline-block items-center justify-center m-auto hidden px-16 relative w-1/2">
                <div className="loader">
                    <span>
                        <div className="px-10 py-2 h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg"></div>
                    </span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="lg:inline-block bg-babyPowder w-full h-full flex items-center justify-center lg:w-1/2 ">
                <div className="w-auto px-12 py-12 m-0 bg-babyPowder">
                    <img
                        src={anokha_circle}
                        alt="Anokha circle"
                        className="animate-spin h-24 mr-auto ml-auto mb-4"
                    />
                    <h1 className="text-5xl font-semibold text-center">Verify OTP</h1>
                    <p className="font-medium text-lg text-gray-900 mt-4 text-center">
                        Enter the OTP received in your Email ID that you registered with.
                    </p>
                    <form className="mt-8" onSubmit={handleOTP}>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg text-center font-medium">OTP</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                className={
                                    "w-3/5 ml-auto mr-auto border-2 border-gray-700 rounded-xl p-4 mt-1 bg-transparent text-center placeholder:text-gray-700" +
                                    (otp ? " border-gray-400" : " border-gray-700")
                                }
                                text-center placeholder="Enter OTP"
                            />
                        </div>

                        <div className="mt-8 w-full ml-auto mr-auto flex flex-col gap-y-4">
                            <button
                                type="submit"
                                className={"active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-backgroundColor rounded-xl text-babyPowder font-bold text-lg"}
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}