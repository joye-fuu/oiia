import { ProjectInfo } from 'components/Interfaces';

const Project = ({info, setState}: {info: ProjectInfo, setState: (value: boolean) => void}) => {
    return (
    <div
      className='bg-blue-400 shadow-lg rounded-sm size-70 p-5 flex flex-col cursor-pointer items-center hover:bg-blue-500'
      onClick={() => {setState(true)}}
    >
      <img
        src={info.img}
        className='rounded-sm size-40'
      ></img>
      <p className='text-lg'>
        {info.name}
      </p>
      <p className='text-xs text-gray-700'>
        {info.tools}
      </p>
    </div>
  )
}

export default Project