import React from 'react'
import {MODAL_INNER, MODAL_OUTER} from '../Styles.jsx'

const PlatformerProjectDetails = (setState) => {

  const TITLE = "unity platformer";
  const DESC = "a platformer that i started making back in high school. will it ever be finished? no one knows";
  
  return <div
    className={MODAL_OUTER}
    onClick={() => setState(false)}
  >
    <div className={MODAL_INNER}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/platformer.gif" className='pt-4'></img>
    </div>
  </div>  

}

export default PlatformerProjectDetails
