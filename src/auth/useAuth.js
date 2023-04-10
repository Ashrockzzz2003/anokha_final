import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", 0);
    const [token, setToken] = useLocalStorage("token", null);
    const [email, setEmail] = useLocalStorage("email", null);
    const [userData, setUserData] = useLocalStorage("userData", null);
    const [userEvents, setUserEvents] = useLocalStorage("userEvents", null);
    const [registerData, setRegisterData] = useLocalStorage("registerData", null);
    const [transactionToken, setTransactionToken] = useState(null);
    const [events, setEvents] = useLocalStorage("events", null);

    const domain = "http://52.66.236.118:3000";

    const LOGIN_API_URL = `${domain}/userWeb/login`;
    const USER_API_URL = `${domain}/userWeb/getUser`;
    const USER_EVENTS_API_URL = `${domain}/userWeb/events/myRegistered`;
    const USER_EDIT_API_URL = `${domain}/userWeb/editUser`;
    const USER_RESGISTER_URL = `${domain}/userWeb/registerUser`;
    const USER_OTP_URL = `${domain}/userWeb/verifyOTP`;
    const TRANSACTION_URL = `${domain}/userWeb/transaction/moveToTransaction`;
    const TRANSACTION_INITIATE_URL = `${domain}/userWeb/transaction/initiateTransaction`;
    const EVENTS_API_URL = `${domain}/userWeb/events/all`;
    const PAYU_URL = "https://test.payu.in/_payment";


    const signIn = async (data) => {
        try {
            const userEmail = data.email;
            const password = data.password;

            const response = await fetch(LOGIN_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "userEmail": userEmail,
                    "password": password,
                }),
            }).catch((error) => {
                console.error(error);
                alert("Something went wrong. Please try again later.");
            });

            console.log(response)

            if (response.status === 404) {
                alert("Invalid Credentials. Try again");
                return;
            }

            const responseData = await response.json();

            setToken(responseData.SECRET_TOKEN);
            setEmail(userEmail);
            setIsLoggedIn(1);

            // Fetch User Data
            const userResponse = await fetch(USER_API_URL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${responseData.SECRET_TOKEN}`,
                },
            });

            setUserData(await userResponse.json());

            // Fetch events reg by user

            const eventsResponse = await fetch(USER_EVENTS_API_URL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${responseData.SECRET_TOKEN}`,
                },
            });

            setUserEvents(await eventsResponse.json());
            window.location.href = "/";

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    };

    const editProfile = async (data) => {
        const fullName = data.fullName;
        const password = data.password;

        const response = await fetch(USER_EDIT_API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
            body: JSON.stringify({
                "fullName": fullName,
                "password": password
            }),
        }).catch((error) => {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        });;

        if (response.status === 401) {
            alert("Session Expired. Logging you out. Try again.");
            signOut();
            window.location.href = "/";
            return;
        }

        // Update User Data Locally
        const userResponse = await fetch(USER_API_URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
        });

        setUserData(await userResponse.json());
        window.location.href = "/";
    }

    const signUp = async (data) => {
        const userEmail = data.userEmail;
        const password = data.password;
        const fullName = data.fullName;
        const collegeId = data.collegeId;

        const response = await fetch(USER_RESGISTER_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userEmail": userEmail,
                "collegeId": collegeId,
                "fullName": fullName,
                "password": password
            }),
        }).catch((error) => {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        });;

        if (response.status !== 200) {
            alert("Something went wrong. Try again later.");
            window.location.href = "/";
            return;
        }

        setRegisterData(await response.json());

        window.location.href = "/register/verifyOtp";
    }

    const verifyOTP = async (data) => {
        const otp = data;

        const response = await fetch(USER_OTP_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("registerData")).SECRET_TOKEN}`,
            },
            body: JSON.stringify({
                "otp": otp,
            }),
        }).catch((error) => {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        });

        if (response.status !== 201) {
            alert("Invalid OTP. Try again.");
            return;
        }

        localStorage.setItem("registerData", null);
        alert("Registration Successful. Proceed to Login.")

        window.location.href = "/login";
    }

    const moveToTransaction = async (eventId) => {
        // Update User Data Locally
        const response = await fetch(TRANSACTION_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            },
        });

        if (response.status === 401) {
            alert("Session Expired. Logging you out. Try again.");
            signOut();
            window.location.href = "/";
            return;
        }

        const moveTData = await response.json();
        console.log(moveTData)
        setTransactionToken(moveTData.TRANSACTION_SECRET_TOKEN);

        window.location.href = `/events/${eventId}/confirmPayment`;
    }

    const initiateTransaction = async (data) => {
        const response = await fetch(TRANSACTION_INITIATE_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${transactionToken}`
            },
            body: JSON.parse({
                "productId": `E${data.eventId}`,
                "firstName": `${data.fullName}`,
                "userEmail": `${data.userEmail}`,
                "address": data.address,
                "city": data.city,
                "state": data.state,
                "country": data.country,
                "zipcode": data.zipcode,
                "phoneNumber": data.phoneNumber
          })
        });

        const responseData = await response.json();
        console.log(responseData);

    }

    const moveToPayU = async () => {
        const data = {
            "productId": "E1",
            "firstName": "SAFENAME",
            "userEmail": "cb.en.u4cse20010@cb.students.amrita.edu",
            "address": "_addressController",
            "city": "_cityController.text",
            "state": "_stateController.text",
            "country": "_countryController.text",
            "zipcode": "641038",
            "phoneNumber": "1234567890"
        }

        console.log(data);
    }


    const fetchEvents = async () => {
        await fetch(`${EVENTS_API_URL}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setEvents(data);
        });
    }

    const signOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return { signIn, signOut, editProfile, verifyOTP, signUp, moveToTransaction, initiateTransaction, fetchEvents, moveToPayU };

};

