import { useLocalStorage } from './useLocalStorage'

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", 0);
    const [token, setToken] = useLocalStorage("token", null);
    const [email, setEmail] = useLocalStorage("email", null);
    const [data, setData] = useLocalStorage("userData", null);

    const LOGIN_API_URL = "http://52.66.236.118:3000/userWeb/login";
    const USER_API_URL = "http://52.66.236.118:3000/userWeb/getUser";
    // const REGISTER_API_URL = "http://52.66.236.118:3000/userWeb/registerUser";

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
            });

            if (response.status === 404) {
                alert("Invalid Credentials. Try again");
                return;
            }

            const responseData = await response.json();
            //console.log(responseData)
            //console.log(responseData.SECRET_TOKEN)
            


            setToken(responseData.SECRET_TOKEN);
            setEmail(userEmail);
            setData({
                "userEmail": responseData.userEmail,
                "fullName": responseData.fullName,
                "isAmritaCBE": responseData.isAmritaCBE,
                "collegeName": responseData.collegeName
            })
            setIsLoggedIn(1);

            window.location.href = "/";

            console.log(isLoggedIn, token, email);

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    };

    const getUserData = async () => {
        try {
            const response = await fetch(USER_API_URL + `/${localStorage.getItem("email")}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            });

            console.log(response)

            const responseData = await response.json();

            setData({
                "userEmail": responseData.userEmail,
                "fullName": responseData.fullName,
                "isAmritaCBE": responseData.isAmritaCBE,
                "collegeId": responseData.collegeId,
            });

            console.log(data);

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    };

    const signOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return { signIn, signOut, getUserData };

};

