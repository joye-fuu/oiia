import React from 'react'
import {MODAL_CLASS} from '../Styles.jsx'

const GcalProjectDetails = (setState) => {

  const TITLE = "Google Calendar time tracker";
  const DESC = "a google workspace add-on which sums up how you've blocked your time in google calendar based on its colour. made with google cardspace API";

  return <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-10"
      onClick={() => setState(false)}
    >
    <div className={MODAL_CLASS}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/timestats.gif" className='pt-4'></img>
    </div>
  </div>  
}

export default GcalProjectDetails