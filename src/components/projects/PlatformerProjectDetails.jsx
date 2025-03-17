import React from 'react'

import "./projects.css";

const PlatformerProjectDetails = (setState) => {

  const TITLE = "unity platformer";
  const DESC = "half-complete platformer i made after getting super inspired by celeste. will it ever be finished? no one knows";
  
  return <div
    className="modal-outer"
    onClick={() => setState(false)}
  >
    <div className="modal-inner">
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/platformer.gif" className='pt-4'></img>
    </div>
  </div>  

}

export default PlatformerProjectDetails
