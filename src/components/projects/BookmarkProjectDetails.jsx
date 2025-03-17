import React from 'react'
import "./projects.css";


const BookmarkProjectDetails = (setState) => {

  const TITLE = "Playlist bookmarks";
  const DESC = "a bookmarks manager! you can add, edit, filter, and drag n drop to reorganise. this was made (painfully) with vanilla javascript";
  
  return <div
    className="modal-outer"
    onClick={() => setState(false)}
  >
    <div className="modal-inner">
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/bookmarks.gif" className='pt-4 z-1'></img>
    </div>
  </div>  
}

export default BookmarkProjectDetails