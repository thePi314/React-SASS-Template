import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screens/login";
import AdminDashboard from "./screens/admin/dashboard";
import Navbar from "./components/navbar";
import InputComponent, { IconInputComponent } from "./components/input";
import Upload from "./components/ImageInput";
import AddQue from "./components/AddQue";


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