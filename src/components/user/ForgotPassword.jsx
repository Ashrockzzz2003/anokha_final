import {
  Card,
  Input,
  Button,
  Typography,
  CardFooter,
  Checkbox,
  CardBody,
  CardHeader,
  Dialog,
} from "@material-tailwind/react";
import React, { useState } from "react";
 
export default function ForgotPassword() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleOTP = () => {
    //? function to send otp to backend
  };
  
  return (
    
    <div className="h-screen flex flex-col items-center justify-center">
      <Card color="white" className="px-32 py-16 rounded-xl" shadow={false}>
      <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Forgot Password
            </Typography>
          </CardHeader>
      <Typography color="gray" className="mt-1 text-center font-normal">
        Enter mail to recieve link.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
        </div>
        <div className="text-center">
        <React.Fragment>
      <Button onClick={handleOpen}>Send OTP</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Reset Password
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="OTP" size="lg" type="number"/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" onSubmit={handleOTP} fullWidth>
              Enter OTP
            </Button>
            
            {/* {
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
            } */}
            
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
    </div>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Back to{" "}
          <a
            href="/login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Log In
          </a>
        </Typography>
      </form>
      </Card>
    </div>
  );
}