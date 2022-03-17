import React, { useState } from "react";

import AdminDashboardNavbar from "./navbar";

import EmployeesSegment from "./employees"; 
import CandidatesSegment from "./candidates";

import Avatar from "../../../assets/images/avatar.png"

import Table from "../../../components/table/index"


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
          <Table />
        </div>
    );
};

export default AdminDashboard;
