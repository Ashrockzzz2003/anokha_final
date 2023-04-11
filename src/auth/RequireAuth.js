import { Navigate, useLocation } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

function RequireAuth({children}) {
    const location = useLocation();
    const auth = JSON.parse(secureLocalStorage.getItem('isLoggedIn'));

    if(!auth) {
        alert("Login Required to view this. Redirecting to Login Page");
        return <Navigate to="/login" state={{ from: location.pathname }}/>
    }
    return children;
}

export default RequireAuth