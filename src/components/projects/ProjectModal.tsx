import { ProjectInfo } from 'Interfaces'
import React from 'react'

const ProjectModal = ({ info, open, setState }: { info: ProjectInfo, open: boolean, setState: any }) => {

  if (!open) return null;

  return <div
    className="modal-outer"
    onClick={() => setState(false)}
  >
    <div className="modal-inner">
      <h2 className="text-xl font-bold">{info.name}</h2>
      <p className="text-sm">{info.desc}</p>
      <img src={info.gif} className='pt-4'></img>
    </div>
  </div>  

};

export default ProjectModal