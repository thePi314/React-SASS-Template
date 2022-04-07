import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screens/login";
import AdminDashboard from "./screens/admin/dashboard";
import Navbar from "./components/navbar";
import CandidatesSegment from "./screens/admin/dashboard/candidates"


const App = () => {
    return (
        <div className="screen">
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/calendar" element={<CandidatesSegment/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
    );
};

export default App;