import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";
import { FaUserAlt} from "react-icons/fa";
import { FaFileSignature} from "react-icons/fa";
import { FaMoneyBillAlt} from "react-icons/fa";
import { FaHandsHelping} from "react-icons/fa";
import { FaQuestion} from "react-icons/fa";
import { FaHashtag} from "react-icons/fa";
import { FaRegCalendarAlt} from "react-icons/fa";

const Navbar = () => {  
  const [open, setOpen] = useState(true)
  return (

        <div className={`${open ? "navbar open" : "navbar"}`}>
        <FaBars className='hambas' onClick={()=>{
                    setOpen(!open)
                }}/>
        <div className='tabs'><FaUserAlt/> Osobe</div>
        <div className='tabs'><FaFileSignature/> Pregled osnovnih podataka</div>
        <div className='tabs'><FaHashtag/> Broj casova</div>
        <div className='tabs'><FaRegCalendarAlt/> Faza obuke</div>
        <div className='tabs'><FaMoneyBillAlt/> Ostatak novca za isplatu</div>
        <div className='tabs'><FaHandsHelping/> Pomoc</div>
        <div className='tabs'><FaQuestion/> O aplikaciji</div>
        </div>

  )
}

export default Navbar
