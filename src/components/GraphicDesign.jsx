import React from 'react'

const GraphicDesign = () => {

  const MARKETING_IMG = "h-60"

  return (
    <section className="flex flex-col text-center justify-center items-center text-3xl">
      <h1 className='text-3xl p-8'>graphic design</h1>
      <p className='text-gray-500 text-sm -mt-5 mb-10'>stuff i did as marketing subcom/director :)</p>
      <div className='flex flex-row gap-2 flex-wrap w-3/4 items-center justify-center'>
        <img src="img/marketing2.png" className={MARKETING_IMG} />
        <img src="img/marketing5.png" className={MARKETING_IMG} />
        <img src="img/marketing3.png" className={MARKETING_IMG} />
        <img src="img/marketing4.png" className={MARKETING_IMG} />
        <img src="img/marketing7.png" className={MARKETING_IMG} />
        <img src="img/marketing6.png" className={MARKETING_IMG} />
      </div>
    </section>
  )
}

export default GraphicDesign