import React, { useState } from "react";

import { IconInputComponent } from "../../../../components/input";
import SearchIcon from "../../../../assets/icons/search.svg";

import DropdownComponent from "../../../../components/dropdown";


const EmployeesSegment = () => {
    const [search, setSearch] = useState(null);

    return (
        <div className="segmnet employees-segment">
            RADNICI
        </div>
    )
} 

export default EmployeesSegment;
