import React from "react";

import AdminDashboardNavbar from "./navbar";

const AdminDashboard = () => {
    return (
        <div className="screen admin-dashboard-screen">
            <AdminDashboardNavbar/>
            <div className="navbar-mobile">
                <AdminDashboardNavbar className="content"/>
            </div>

            <div className="content"></div>
        </div>
    );
};

export default AdminDashboard;
