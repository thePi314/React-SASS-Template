import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./screens/homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;