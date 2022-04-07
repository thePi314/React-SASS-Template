import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screens/login";
import AdminDashboard from "./screens/admin/dashboard";
import Navbar from "./components/navbar";
import InputComponent, { IconInputComponent } from "./components/input";
import UploadImages from "./components/ImageInput";
import Pitanja from "./screens/admin/Pitanja";


const App = () => {
    return (
        <div className="screen">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/pitanja" element={<Pitanja/>} />
            </Routes>
            
        </BrowserRouter>
        
        
    </div>
    );
};

export default App;     