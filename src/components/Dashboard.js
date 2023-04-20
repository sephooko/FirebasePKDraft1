import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import welcomeSign from "../images/welcome-calligraphic.png";
import kapibara from "../images/kapibara.jpg"

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <div>
            <div align="center">
            <img src={welcomeSign} alt="welome signature"/>
            </div>
            <p  class="fs-5 text-muted">Miło że jesteś, oto twoja kapibara. Ma się świetnie!</p>
            <img src={kapibara} alt="kapibara i kot"/>
            <br/>
            <br/>
            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
        </div>
    );
};
export default Dashboard;
