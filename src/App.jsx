import React from 'react'
import "./App.css";
import Project from './components/Project';
import { useState } from "react";
import GcalProjectDetails from './components/GcalProjectDetails';
import BookmarkProjectDetails from './components/BookmarkProjectDetails';
import PlatformerProjectDetails from './components/PlatformerProjectDetails';
import ImageSlider from './components/ImageSlider';


const App = () => {

  const [src, setSrc] = useState("img/oiia-1.gif");
  // const sound = new Audio("/sounds/oiia-oiia-sound.mp3"); // Change to your sound file

  const handleOiiaDown = () => {
    setSrc("img/oiia-2.gif");
    // sound.currentTime = 0.3;
    // sound.play();
  };
  const handleOiiaUp = () => {
    setSrc("img/oiia-1.gif");
    // sound.pause();
  };

  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutPage = () => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/50 z-10"
        onClick={() => setAboutOpen(false)}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center flex flex-col justify-center items-center">
          <img className='size-50 mt-5' src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHpqZzRxZ2Q0d3RxZG5wZmNseWRndDJpNXU1cHIzbXNwbjRwbjB2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/x8YjX77exapooAAwNc/giphy.gif" />
          <h2 className="text-xl font-bold pt-5">hi i'm joye</h2>
          <p className="mt-2">welcome to my subcom apps site! i enjoy making silly projects and drawing in my spare time</p>
        </div>
      </div>
    );
  }

  const [gcalDetails, setGcalDetails] = useState(false);
  const [bookmarkDetails, setBookmarkDetails] = useState(false);
  const [platformerDetails, setPlatformerDetails] = useState(false);

  const MARKETING_IMG = "h-60"

  return (
    <div>
      {/* <Loading /> */}
      <section className="h-screen flex items-center justify-center bg-blue-200">
        <div className='flex items-center justify-center flex-col'>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-gray-500 text-lg'>(click to spin)</p>
          <img
            src={src}
            className="size-100 m-5 hover:size-110 hover:m-0 cursor-pointer"
            onMouseDown={handleOiiaDown}
            onMouseUp={handleOiiaUp}
            onMouseLeave={handleOiiaUp}
            draggable={false}
          />
          <p className='text-center text-2xl'>
            hello welcome!!
          </p>
          <button
            className='shadow-lg rounded-xs mt-5 bg-white cursor-pointer hover:bg-blue-400 h-9 w-40'
            onClick={() => setAboutOpen(true)}
          >
            about
          </button>
          {aboutOpen && aboutPage()}
        </div>
      </section>
      <section className="flex flex-col text-center p-10 pt-15">
        <h1 className='text-3xl'>projects</h1>
        <div className='flex flex-wrap justify-center p-10 items-center gap-5'>
          <Project
            projName={"Gcal time tracker"}
            desc={"JavaScript, Google CardService"}
            imgUrl={"img/proj3.png"}
            modalToggle={setGcalDetails}
          />
          {gcalDetails && GcalProjectDetails(setGcalDetails)}

          <Project
            projName={"Playlist bookmarks"}
            desc={"HTML, CSS, JavaScript"}
            imgUrl={"img/proj2.png"}
            modalToggle={setBookmarkDetails}
          />
          {bookmarkDetails && BookmarkProjectDetails(setBookmarkDetails)}

          <Project
            projName={"Unity platformer"}
            desc={"C#, Unity"}
            imgUrl={"img/proj1.png"}
            modalToggle={setPlatformerDetails}
          />
          {platformerDetails && PlatformerProjectDetails(setPlatformerDetails)}

        </div>
      </section>
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
      <section className="flex flex-col text-center text-3xl mt-10">
        <h1 className='text-3xl p-8'>art</h1>
        <p className='text-gray-500 text-sm -mt-5 mb-5'>i also like to draw sometimes! here's some of my favourites</p>
        <ImageSlider />
      </section>

      <section className="flex items-center justify-center text-center text-lg p-20">
        <p>thanks for visiting!!</p>
      </section>
    </div>
  )
}

export default App