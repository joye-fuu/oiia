import {React, useState} from 'react'
import Project from "./Project";
import GcalProjectDetails from './GcalProjectDetails';
import PlatformerProjectDetails from './PlatformerProjectDetails';
import BookmarkProjectDetails from './BookmarkProjectDetails';

// const PROJECT_INFO = {
//   gcal: {
//     name: "Gcal time tracker",
//     tools: "JavaScript, Google CardService",
//     img: "img/proj3.png",
//   },
// };

const Projects = () => {

  const [gcalDetails, setGcalDetails] = useState(false);
  const [bookmarkDetails, setBookmarkDetails] = useState(false);
  const [platformerDetails, setPlatformerDetails] = useState(false);

  return (
    <div>
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
    </div>
  )
}

export default Projects