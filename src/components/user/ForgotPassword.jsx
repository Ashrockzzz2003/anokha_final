import {
  Card,
  Input,
  Button,
  Typography,
  CardFooter,
  CardBody,
  CardHeader,
  Dialog,
  Checkbox,
} from "@material-tailwind/react";
import React from "react";
import anokha_circle from "../utils/anokha_circle.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const { getResetTokenAndOtp } = useAuth();
  const { verifyResetOTP } = useAuth();

  const handleOpen = () => {
    if (!isEmailValid) {
      alert("Check your email again!");
      return;
    };
    setOpen((cur) => !cur)
    if (!open) {
      console.log("I was here");
      getResetTokenAndOtp(email);
    }
  };
  const [isAmrita, setIsAmrita] = React.useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = emailRegex.test(email);

  const handleAmrita = () => {
    setIsAmrita(!isAmrita);
  };

  const handleOTP = () => {
    verifyResetOTP(otp);
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      {/* <div className="lg:inline-block items-center justify-center m-auto hidden px-16 relative w-full">
         <div className="loader">
          <span>
            <div className="h-full w-full rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg">
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum molestiae ipsum sit qui velit perspiciatis impedit odio?
                Sed
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
            className="animate-spin h-24 mr-auto ml-auto mb-4"
          />
          <h1 className="text-5xl font-semibold text-center">
            Forgot Password
          </h1>
          <p className="font-medium text-lg text-gray-900 mt-4 text-center">
            Enter your E-Mail to recieve OTP
          </p>
          <div className="mt-4">
            <div className="flex flex-col mx-auto items-center">
              <Checkbox
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
            <div className="flex flex-col mt-4">
              {isAmrita ? (
                <label className="text-lg text-center font-medium">
                  Amrita Email ID
                </label>
              ) : (
                <label className="text-lg text-center font-medium">
                  Email
                </label>
              )}
            </div>
            <form onSubmit={handleOpen}>
              <div className="mt-2 text-center">
                <input
                  type="text"
                  id="email"
                  name="email"
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
              <div className="mt-8 text-center">
              <Button onClick={handleOpen} className="bg-backgroundColor">Send OTP</Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <React.Fragment>
                <form>
                  <Dialog
                    size="xl"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none">
                    <Card className="mx-auto w-full max-w-[24rem]">
                      <CardHeader
                        variant="gradient"
                        className="mb-4 grid h-24 place-items-center bg-backgroundColor">
                        <Typography variant="h3" color="white">
                          Reset Password
                        </Typography>
                      </CardHeader>
                      <CardBody className="flex flex-col gap-4">
                        <Input label="OTP" size="lg" type="number" onChange={(e) => setOtp(e.target.value)} />
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button
                          variant="fill"
                          type="submit"
                          onClick={handleOTP}
                          className="bg-backgroundColor"
                          fullWidth>
                          Verify OTP
                        </Button>
                      </CardFooter>
                    </Card>
                  </Dialog>
                </form>
              </React.Fragment>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Back to{" "}
                <Link to="/login" className="text-backgroundColor font-medium">
                  Login.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}