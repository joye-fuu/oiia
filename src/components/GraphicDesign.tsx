import React from 'react'
import "./components.css";

const GraphicDesign = () => {

  return (
    <section id="graphic-design" className="flex flex-col text-center justify-center items-center text-3xl pt-20">
      <h1 className='text-3xl p-8'>graphic design</h1>
      <p className='text-gray-500 text-sm -mt-5 mb-10'>stuff i did as marketing subcom/director :)</p>
      <div className='flex flex-row gap-2 flex-wrap w-3/4 items-center justify-center'>
        <img src="img/marketing2.png" className="marketing-img" />
        <img src="img/marketing5.png" className="marketing-img" />
        <img src="img/marketing3.png" className="marketing-img" />
        <img src="img/marketing4.png" className="marketing-img" />
        <img src="img/marketing7.png" className="marketing-img" />
        <img src="img/marketing6.png" className="marketing-img" />
      </div>
    </section>
  )
}

export default GraphicDesign