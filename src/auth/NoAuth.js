import { Navigate, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";


function NoAuth({children}) {
    const location = useLocation();
    const auth = JSON.parse(secureLocalStorage.getItem('isLoggedIn'));

    if(auth) {
        alert("You are already Logged in! Redirecting to Home Page");
        return <Navigate to="/" state={{ from: location.pathname }}/>
    }
    return children;
}

export default NoAuth