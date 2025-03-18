import { ProjectInfo } from 'components/Interfaces'
import React from 'react'

const ProjectModal = ({ info, open, setState }: { info: ProjectInfo, open: boolean, setState: any }) => {

  if (!open) return null;

  return <div
    className="fixed inset-0 flex items-center justify-center bg-black/30 z-2"
    onClick={() => setState(false)}
  >
    <div className="bg-white p-6 rounded-sm shadow-lg w-xl text-center flex justify-center flex-col items-center">
      <h2 className="text-xl font-bold">{info.name}</h2>
      <p className="text-sm">{info.desc}</p>
      <img src={info.gif} className='pt-4'></img>
    </div>
  </div>  

};

export default ProjectModal