import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function ConfirmPaymentPage() {
  const tempData = useState(localStorage.getItem("userData"));
  const data = JSON.parse(tempData[0])[0];

  // Handle Login
  const handleConfirm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-screen">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-full ml-auto mr-auto max-w-screen-lg">
        <div className="mb-4 flex text-center flex-col gap-2">
          {/* <label>Order ID</label>
                                <Input size="lg" label="OrderID" value={orderID} disabled /> */}
          <label htmlFor="name">Name</label>
          <Input
            size="lg"
            id="name"
            label="Full Name"
            value={data.fullName}
            disabled
          />

          <label htmlFor="email">Email ID</label>
          <Input
            size="lg"
            id="email"
            label="Email"
            type={"email"}
            value={data.email}
            disabled
          />

          <label htmlFor="phone">Phone Number</label>
          <Input
            size="lg"
            id="phone"
            label="Phone Number"
            type={"number"}
            maxLength="10"
            required
          />

          <label htmlFor="address">Address</label>
          <Input
            size="lg"
            id="address"
            label="Address"
            type={"text"}
            required
          />

          <label htmlFor="city">City</label>
          <Input size="lg" id="city" label="city" type={"text"} required />

          <label htmlFor="state">State</label>
          <Input size="lg" id="state" label="state" type={"text"} required />

          <label htmlFor="country">Country</label>
          <Input
            size="lg"
            id="country"
            label="country"
            type={"text"}
            required
          />
        </div>
      </form>
      <form className="block">
        <div>
          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal">
                I agree the
                <a
                  href="/terms-and-conditions"
                  className="font-medium transition-colors hover:text-blue-500">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
        </div>
        <div className="mt-4">
          <Button
            variant="text"
            color="red"
            // onClick={ }
            className="mr-4">
            <span>Cancel</span>
          </Button>
          <Button
            variant="filled"
            className="bg-backgroundColor text-babyPowder"
            onClick={handleConfirm}
          >
            <span>Proceed to Payment</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
