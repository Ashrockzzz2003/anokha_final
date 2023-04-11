import React, { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Checkbox,
    Typography,
    CardHeader,
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

export default function ConfirmPayment({ membercount, amount, buttonLabel }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        const auth = JSON.parse(localStorage.getItem('isLoggedIn'));

        if(!auth) {
            alert("Login Required to view this. Redirecting to Login Page");
            return window.location.href = "/login";
        }
        setOpen(!open)
    };

    const handleMembers = () => {
        // send team members to backend
    };

    const orders = [...Array(membercount).keys()]; // generate an array of order numbers

    
    const orderElements = orders.map(orderNum => (
      <div key={orderNum}>
        <label>Enter Member details</label>
        <Input size="lg" label={`Member ${orderNum}`} value={orderNum + 1} />
      </div>
    ));
    
    return (
        
        
        
            <React.Fragment>
                <Button className="filled bg-khaki text-backgroundColor justify-center w-full text-md" onClick={handleOpen} variant="filled">
                    {buttonLabel}
                </Button>
                <Dialog open={open} size={"xxl"} handler={handleOpen} className="bg-babyPowder">
                    <DialogHeader>Register Members for Events</DialogHeader>
                    <DialogBody divider>
                        <form className="mt-8 mb-2 w-3/5 ml-auto mr-auto max-w-screen-lg">
                            <div className="mb-4 flex text-center flex-col gap-2">
                                {orderElements}
                                <label htmlFor="amount">Amount</label>
                                <Input size="lg" label="Amount" id="amount" type={"number"} value={amount} disabled />
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
                                <Button variant="filled" className="bg-backgroundColor text-babyPowder" onClick={handleMembers}>
                                    <span>Register Team</span>
                                </Button>
                            </div>
                        </form>
                    </DialogFooter>
                </Dialog>
            </React.Fragment>
    );
}