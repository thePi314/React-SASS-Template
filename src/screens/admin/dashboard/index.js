import React, { useState } from "react";

import EmployeesSegment from "./employees"; 
import CandidatesSegment from "./candidates";

import Avatar from "../../../assets/images/avatar.png"

import Table from "../../../components/table/index"
import TableT from "../../../components/tableT";
import dots from "../../../assets/icons/dots.svg";
import arrow_down_left from "../../../assets/icons/arrow-down-left.svg";
import trash from "../../../assets/icons/trash.svg";


const DashboardRoutes = [
    {
        label: "Employees",
        icon: Avatar,
        component: <EmployeesSegment/>
    },
    {
        label: "Candidates",
        icon: Avatar,
        component: <CandidatesSegment/>
    }
]

const AdminDashboard = () => {
    const [activeRoute, setActiveRoute] = useState(0);

    return (
        <div className="screen admin-dashboard-screen">
          
          
        </div>

    );
};

export default AdminDashboard;
