import React, { useState } from "react";

import EmployeesSegment from "./employees"; 
import CandidatesSegment from "./candidates";

import Avatar from "../../../assets/images/avatar.png"

import Table from "../../../components/table/index"
import TableT from "../../../components/tableT";


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
          <TableT 
                    // data={data}
                    actions={[{
                        icon:dots,
                        onClick:()=>{
                            console.log("Edit akcija")
                        }
                    },
                    {
                        icon:arrow_down_left,
                        onClick:()=>{
                            console.log("Delete akcija")
                        }
                    },
                    {
                        icon:trash,
                        onClick:()=>{
                            console.log("Open akcija")
                        }
                    }
                ]
                }
                />
        </div>

    );
};

export default AdminDashboard;
