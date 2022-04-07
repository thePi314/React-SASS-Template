import React from 'react'

function Calender() {
  return (
    
    <div className="calendar-wrapper"> 
      <div className="calender">
          <h1 className="txt">Kalendar</h1>
          <h2 className="txt-date">Ponedjeljak,Mart 14,2022 </h2>
          <div className="week">
            <div className="txt-week">Pon <div className="num-week">14.03</div></div>
            <div className="txt-week">Uto <div className="num-week">15.03</div></div>
            <div className="txt-week">Sri<div className="num-week">16.03</div></div>
            <div className="txt-week">Cet <div className="num-week">17.03</div></div>
            <div className="txt-week">Pet <div className="num-week">18.03</div></div>
            <div className="txt-week">Sub <div className="num-week">19.03</div></div>
            <div className="txt-week">Ned <div className="num-week">2.03</div></div>
          </div>
          <div className="hours-wrapper">
            <div className="hour">08:00 </div>
            <div className="hour">10:00 </div>
            <div className="hour">12:00 </div>
            <div className="hour">14:00 </div>
            <div className="hour">16:00 </div>
            <div className="hour">18:00 </div>
          </div>
      </div>
      <div className='background'/>
    </div>
  )
}

export default Calender;