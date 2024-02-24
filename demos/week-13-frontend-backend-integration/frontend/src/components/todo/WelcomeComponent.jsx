import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
    const { name } = useParams();
    
    return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {name}. Click to manage your todos{" "}
                <Link to="/todos">here</Link>.
            </div>
        </>
    );
};

export default WelcomeComponent;
