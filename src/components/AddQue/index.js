import React, { useState } from 'react'
import "./_index.scss";


const AddQue = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className='Button' onClick={()=>setShow(!show)}>
      
    </div>
    
    {show && 
      <div className='AddQue'>

      </div>
    }
    </>
  )
}

export default AddQue