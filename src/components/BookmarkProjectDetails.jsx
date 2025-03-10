import React from 'react'
import {MODAL_CLASS} from '../Styles.jsx'

const BookmarkProjectDetails = (setState) => {

  const TITLE = "Playlist bookmarks";
  const DESC = "an (overengineered) bookmark manager. you can add, edit, filter, and drag n drop to reorganise";
  
  return <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-10"
      onClick={() => setState(false)}
    >
    <div className={MODAL_CLASS}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/bookmarks.gif" className='pt-4 z-1'></img>
    </div>
  </div>  
}

export default BookmarkProjectDetails