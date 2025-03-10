import React from 'react'
import {MODAL_INNER, MODAL_OUTER} from '../Styles.jsx'

const BookmarkProjectDetails = (setState) => {

  const TITLE = "Playlist bookmarks";
  const DESC = "a bookmarks manager! you can add, edit, filter, and drag n drop to reorganise. this was made (painfully) with vanilla javascript";
  
  return <div
    className={MODAL_OUTER}
    onClick={() => setState(false)}
  >
    <div className={MODAL_INNER}>
      <h2 className="text-xl font-bold">{TITLE}</h2>
      <p className="text-sm">{DESC}</p>
      <img src="img/bookmarks.gif" className='pt-4 z-1'></img>
    </div>
  </div>  
}

export default BookmarkProjectDetails