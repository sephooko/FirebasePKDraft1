import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
    <>
        <h1 class="display-4 fw-normal">Home</h1>
        {currentUser ? (
            <p>
                You are logged - <Link to="/dashboard">Zobacz Dashboard</Link>
            </p>
        ) : (
        <p>
            <Link class="form-control" to="/login">Log In</Link> or <Link class="form-control" to="/signup">Sign Up</Link>
        </p>
        )}
    </>
    );
};
export default Home;
