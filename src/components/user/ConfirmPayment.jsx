import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";

export default function ConfirmPayment({ orderID, amount, eventName, fullName, email, buttonLabel }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        const auth = JSON.parse(localStorage.getItem('isLoggedIn'));

        if(!auth) {
            alert("Login Required to view this. Redirecting to Login Page");
            return window.location.href = "/login";
        }
        setOpen(!open)
    };

    const handleConfirm = () => {
        // Redirect to PayU, pass req args
    };

    return (
            <Fragment>
                <Button className="filled text-backgroundColor bg-khaki justify-center w-full text-lg" onClick={handleOpen} variant="filled">
                    {buttonLabel}
                </Button>
                <Dialog open={open} size={"md"} handler={handleOpen} className="bg-babyPowder">
                    <DialogHeader>Payment Details</DialogHeader>
                    <DialogBody divider>
                        <form className="mt-8 mb-2 w-3/5 ml-auto mr-auto max-w-screen-lg">
                            <div className="mb-4 flex text-center flex-col gap-2">
                                <label>Order ID</label>
                                <Input size="lg" label="OrderID" value={orderID} disabled />
                                <label>Amount</label>
                                <Input size="lg" type={"number"} label="Amount" value={amount} disabled />
                                <label>Event Name</label>
                                <Input size="lg" label="Event Name" value={eventName} disabled />
                                <label>Full Name</label>
                                <Input size="lg" label="Full Name" value={fullName} disabled />
                                <label>Email ID</label>
                                <Input size="lg" label="Email" type={"email"} value={email} disabled />
                                <br />
                                <Input size="lg" label="Pincode" type={"number"} maxLength="6" required />
                            </div>
                        </form>
                    </DialogBody>
                    <DialogFooter className="w-fit ml-auto mr-auto">
                        <form className="block">
                            <div>
                                <Checkbox
                                    required
                                    label={
                                        (
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
                                        )
                                    }
                                    containerProps={{ className: "-ml-2.5" }}
                                />
                            </div>
                            <div className="mt-4">
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-4"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button variant="filled" className="bg-backgroundColor text-babyPowder" onClick={handleConfirm}>
                                    <span>Proceed to Payment</span>
                                </Button>
                            </div>
                        </form>
                    </DialogFooter>
                </Dialog>
            </Fragment>
    );
}