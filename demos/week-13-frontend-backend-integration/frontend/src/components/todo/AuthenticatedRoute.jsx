import { Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

const AuthenticatedRoute = ( { children } ) => {
    if (AuthenticationService.isUserLoggedIn()) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default AuthenticatedRoute;
