import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screens/login";
import AdminDashboard from "./screens/admin/dashboard";
import Navbar from "./components/navbar";


const App = () => {
    return (
        <div className="screen">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
        
    </div>
    );
};

export default App;