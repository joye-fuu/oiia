import React from 'react'

const PlatformerProjectDetails = (setState) => {

  const MODAL_CLASS = "bg-white p-6 rounded-sm shadow-lg w-2xl text-center flex justify-center flex-col items-center";
  const TITLE = "Work in progress";
  const DESC = "i will finish it one day...";
  
  return <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-10"
      onClick={() => setState(false)}
    >
    <div className={MODAL_CLASS}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="/img/platformer.gif" className='pt-4'></img>
    </div>
  </div>  

}

export default PlatformerProjectDetails