import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";

const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
            try {
                firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
            } catch (error) {
                alert(error);
            }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <>
            <div class="text-center">
                <main class="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit}>
                    <h1 class="display-4 fw-normal">Logowanie</h1>

                    <div class="form-floating">
                        <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    </form>
                </main>
            </div>
        </>
    );
};
export default LogIn;
