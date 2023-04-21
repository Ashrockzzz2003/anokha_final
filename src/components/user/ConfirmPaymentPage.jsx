import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import secureLocalStorage from "react-secure-storage";
import { useAuth } from "../../auth/useAuth";

export default function ConfirmPaymentPage() {
  const tempData = useState(secureLocalStorage.getItem("userData"));
  const data = JSON.parse(tempData[0])[0];

  const { isPassport } = useParams();

  const [name] = useState(data.fullName);
  const [email] = useState(data.userEmail);
  const [phone] = useState(data.phoneNumber);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  
  //regex for zip code
  const zipRegex = /^[0-9]{6}$/;
  
  //check if zip code is valid
  const isZipValid = zipRegex.test(zipCode);
  

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
    }), isPassport);
  };

  return (
    <div className="md:h-full h-full bg-babyPowder w-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="flex  flex-col">
        <Typography variant="h2" className="text-center">
          Register for {isPassport === "true" ? "Passport" : "Event"}
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Enter your details to register.
        </Typography>
      </div>
      <form
        className="mt-8 pb-2 w-full flex flex-col justify-center ml-auto mr-auto max-w-screen-lg"
        onSubmit={handleConfirm}
      >
        <div className="mb-4 flex text-left flex-col gap-6">
          {/* <label>Order ID</label>
                                <Input size="lg" label="OrderID" value={orderID} disabled /> */}
          <div>
            <label htmlFor="name">Name</label>
            <Input size="lg" label="Full Name" value={data.fullName} disabled />
          </div>

          <div>
            <label htmlFor="email">Email ID</label>
            <Input
              size="lg"
              label="Email"
              type={"email"}
              value={data.userEmail}
              disabled
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <Input
              
              value={data.phoneNumber}
              label="Phone Number"
              type={"number"}
              disabled
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Input
              size="lg"
              //label="Address"
              type={"text"}
              onChange={(e) => setAddress(e.target.value)}
              
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <Input
              size="lg"
              id="city"
              //label="City"
              type={"text"}
              onChange={(e) => setCity(e.target.value)}
              
            />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <Input
              size="lg"
              id="state"
              //label="State"
              type={"text"}
              onChange={(e) => setState(e.target.value)}
              
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Input
              size="lg"
              //label="Country"
              type={"text"}
              onChange={(e) => setCountry(e.target.value)}
            
            />
          </div>

          <div>
            <label htmlFor="country">ZipCode</label>
            <Input
              size="lg"
              //label="ZipCode"
              type={"number"}
              maxLength="6"
              minLength={"6"}
              onChange={(e) => setZipCode(e.target.value)}
         
            />
          </div>
        </div>
        <div className="w-fit ml-auto mr-auto">
          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="/terms-and-conditions"
                  className="font-medium transition-colors hover:text-blue-500"
                >
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
            className="mr-4"
            onClick={() => {
              window.location.href = "/events";
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            variant="filled"
            className="bg-backgroundColor text-babyPowder"
            disabled={!isZipValid}
          >
            <span>Proceed to Payment</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
