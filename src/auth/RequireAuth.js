import { Navigate, useLocation } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

function RequireAuth({children}) {
    const location = useLocation();
    const auth = JSON.parse(secureLocalStorage.getItem('isLoggedIn'));

    if(!auth) {
        alert("Session Expired. Login again to view this. Redirecting to login page.");
        return <Navigate to="/login" state={{ from: location.pathname }}/>
    }
    return children;
}

export default RequireAuth