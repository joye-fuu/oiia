import React from 'react'

import "./projects.css";

const GcalProjectDetails = (setState) => {

  const TITLE = "Google Calendar time tracker";
  const DESC = "a google workspace add-on which sums up how you've spent your time in google calendar. made with google cardspace API";

  return <div
    className="modal-outer"
    onClick={() => setState(false)}
  >
    <div className="modal-inner">
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/timestats.gif" className='pt-4'></img>
    </div>
  </div>  
}

export default GcalProjectDetails
