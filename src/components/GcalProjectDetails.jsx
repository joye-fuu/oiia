import React from 'react'

const GcalProjectDetails = (setState) => {

  const MODAL_CLASS = "bg-white p-6 rounded-sm shadow-lg w-2xl text-center flex justify-center flex-col items-center z-100";
  const TITLE = "Google Calendar time tracker";
  const DESC = "a google workshpace add-on which sums up how you've blocked your time in google calendar. sorted based on colour";

  return <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-10"
      onClick={() => setState(false)}
    >
    <div className={MODAL_CLASS}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="/img/timestats.gif" className='pt-4'></img>
    </div>
  </div>  
}

export default GcalProjectDetails