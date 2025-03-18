import React from 'react'
import { useState } from "react";
import './components.css';

const Projects = () => {

  const [oiia, setOiia] = useState("img/oiia-1.gif");
  const [aboutOpen, setAboutOpen] = useState(false);
  
  const aboutPage = () => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/50 z-2"
        onClick={() => setAboutOpen(false)}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center flex flex-col justify-center items-center">
          <img className='size-50 mt-5' src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHpqZzRxZ2Q0d3RxZG5wZmNseWRndDJpNXU1cHIzbXNwbjRwbjB2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/x8YjX77exapooAAwNc/giphy.gif" />
          <h2 className="text-xl font-bold pt-5">hi! i'm joye</h2>
          <p className="mt-2">welcome to my subcom apps site! i enjoy making silly web projects and drawing</p>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="h-screen flex items-center justify-center about-gradient">
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-blue-900 text-lg pt-20 -mb-10'>(click to spin)</p>
            <img
              src={oiia}
              className="size-100 m-5 hover:size-110 hover:m-0 cursor-pointer"
              onMouseDown={() => setOiia("img/oiia-2.gif")}
              onMouseUp={() => setOiia("img/oiia-1.gif")}
              onMouseLeave={() => setOiia("img/oiia-1.gif")}
              draggable={false}
            />
          </div>
          <div className='flex flex-col justify-center items-center pt-30'>
            <p className='text-center text-2xl'>
              hello hello welcome!!
            </p>
            <button
              className='shadow-lg rounded-xs mt-5 bg-white cursor-pointer hover:bg-blue-100 h-9 w-40'
              onClick={() => setAboutOpen(true)}
            >
              about
            </button>
            {aboutOpen && aboutPage()}
          </div>
        </div>
        <img
          src="img/down-arrow.png"
          className='h-10 mt-20 animate-bounce hover:cursor-pointer'
          onClick={() => {window.scrollBy({ top: 300, behavior: "smooth" })}}
        />
      </div>
    </section>
  )
}

export default Projects