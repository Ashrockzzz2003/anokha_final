import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { useAuth } from "../../auth/useAuth";

export default function ConfirmPaymentPage() {
  const tempData = useState(localStorage.getItem("userData"));
  const data = JSON.parse(tempData[0])[0];

  const [name] = useState(data.fullName);
  const [email] = useState(data.userEmail);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const { eventId } = useParams();
  const { initiateTransaction } = useAuth();

  // Handle Login
  const handleConfirm = (e) => {
    e.preventDefault();
    initiateTransaction(JSON.stringify({
      "eventId": parseInt(eventId),
      "fullName": name,
      "userEmail": email,
      "phoneNumber": phone,
      "address": address,
      "city": city,
      "state": state,
      "country": country,
      "zipcode": zipCode
    }));
  };

  return (
    <div className="md:h-screen h-full bg-babyPowder w-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="flex  flex-col">
        <Typography variant="h2" className="text-center">
          Register for Event
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Enter your details to register.
        </Typography>
      </div>
      <form className="mt-8 pb-2 w-full flex flex-col justify-center ml-auto mr-auto max-w-screen-lg" onSubmit={handleConfirm} action={"https://test.payu.in/_payment"}>
        <div className="mb-4 flex text-center flex-col gap-2">
          {/* <label>Order ID</label>
                                <Input size="lg" label="OrderID" value={orderID} disabled /> */}
          <label htmlFor="name">Name</label>
          <Input
            size="lg"
            label="Full Name"
            value={data.fullName}
            disabled
          />

          <label htmlFor="email">Email ID</label>
          <Input
            size="lg"
            label="Email"
            type={"email"}
            value={data.userEmail}
            disabled
          />

          <label htmlFor="phone">Phone Number</label>
          <Input
            size="lg"
            label="Phone Number"
            type={"number"}
            maxLength="10"
            minLength={"10"}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="address">Address</label>
          <Input
            className="bg-white"
            size="lg"
            label="Address"
            type={"text"}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label htmlFor="city">City</label>
          <Input size="lg" id="city" label="City" type={"text"} onChange={(e) => setCity(e.target.value)} required />

          <label htmlFor="state">State</label>
          <Input size="lg" id="state" label="State" type={"text"} onChange={(e) => setState(e.target.value)} required />

          <label htmlFor="country">Country</label>
          <Input
            size="lg"
            label="Country"
            type={"text"}
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <label htmlFor="country">ZipCode</label>
          <Input
            size="lg"
            label="ZipCode"
            type={"number"}
            maxLength="6"
            minLength={"6"}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="w-fit ml-auto mr-auto">
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
        <div className="mt-4 w-fit ml-auto mr-auto">
          <Button
            variant="text"
            color="red"
            // onClick={ }
            className="mr-4"
            onClick={() => {
              window.location.href = "/events"
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            variant="filled"
            className="bg-backgroundColor text-babyPowder"
          >
            <span>Proceed to Payment</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
