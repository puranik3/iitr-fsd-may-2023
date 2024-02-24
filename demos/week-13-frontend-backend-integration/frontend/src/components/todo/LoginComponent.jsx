import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

const LoginComponent = () => {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState( 'user' );
    const [ password, setPassword ] = useState( '' );
    const [ hasLoginFailed, setLoginFailed ] = useState( false );

    const loginClicked = async () => {
        try {
            const response = await AuthenticationService.executeJwtAuthenticationService( username, password )
            AuthenticationService.registerSuccessfulLoginForJwt( username, response.data.token );
            navigate(`/welcome/${username}`);
        } catch( error ) {
            setLoginFailed( true );
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {hasLoginFailed && (
                    <div className="alert alert-warning">
                        Invalid Credentials
                    </div>
                )}
                User Name:{" "}
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={event => setUsername( event.target.value )}
                />
                Password:{" "}
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={event => setPassword( event.target.value )}
                />
                <button
                    className="btn btn-success"
                    onClick={loginClicked}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginComponent;
