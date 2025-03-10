import React from 'react'
import {MODAL_CLASS} from '../Styles.jsx'

const PlatformerProjectDetails = (setState) => {

  const TITLE = "Work in progress";
  const DESC = "will it ever be finished..? no one knows";
  
  return <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-10"
      onClick={() => setState(false)}
    >
    <div className={MODAL_CLASS}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/platformer.gif" className='pt-4'></img>
    </div>
  </div>  

}

export default PlatformerProjectDetails