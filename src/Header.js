import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu' // Materail UI styling
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
//import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className="header">
      <div className="header__logo">
        <MenuIcon />
        <Link to="/">
          {' '}
          {/** redirects back to the home page */}
          <img
            className="header__logo"
            src="https://www.stuffedmonkeyvideo.com/wp-content/uploads/2020/01/youtubenewlogo2.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />{' '}
        {/**so that you can type in the search bar */}
        <Link to={`/search/${inputSearch}`}>
          {' '}
          {/**Searches your input text */}
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Faran Siddiqui"
          src="https://i.redd.it/8bfw3gigvto31.png"
        />
      </div>
    </div>
  )
}

export default Header
