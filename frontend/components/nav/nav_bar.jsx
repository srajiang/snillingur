import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import SearchBarContainer from './search_bar_container';

import { updateSessionMenuState } from '../../actions/ui_actions';



class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    (!this.props.sessionMenuActive) ? dispatch(updateSessionMenuState(true)) : dispatch(updateSessionMenuState(false));
  }

 


  renderSessionMenu() {

    if (this.props.sessionMenuActive) {
      
      return (
        <>
          <div className="user-profile-menu">
            {/* account */}
            <div className="user-profile-header">ACCOUNT</div>

            {/* account */}
            
            <div className="user-profile-view">
              <Link to="/profile">View Profile</Link>
            </div>

            {/* logout */}
            <div className="user-profile-logout">
              <a
                onClick={currentUserId => this.props.logoutUser(currentUserId)}
              >
                Sign Out
              </a>
            </div>

            {/* logout */}
          </div>
        </>
      );
    }

  }

  renderSession() {

    let { currentUserId, users} = this.props;

    if ( currentUserId && users ) {  //already signed in 
      
      return (
        <>
          <div
            onClick={this.toggleMenu}
            className="user-profile"
          >
            <div className="user-profile-name">
              {" "}
              <FontAwesomeIcon
                className=""
                icon={faUserCircle}
              ></FontAwesomeIcon>
              <p>{users[currentUserId].username}</p>
            </div>
          </div>

          {this.renderSessionMenu()}
        </>
      );

    }

    //not already signed in
    return (
      <>
        <div className="sign-option">
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="sign-option">
          <Link to="/signin">SIGN IN</Link>
        </div>
      </>
    );
  }

  render() {
    return (
      <header className="nav-bar">

       
        <SearchBarContainer />
    
        <div className="center-nav">
          <Link to="/">

            <svg className="app-logo" viewBox="0 0 136.55 13.01">
              <path d="M106.74,3.05h0a3.78,3.78,0,0,0-2.8-1.2,3.93,3.93,0,0,0-2.8,1.1c-.2.2-.3.4-.5.6v.1a.1.1,0,0,0,.1.1,3.19,3.19,0,0,1,1.4-.3,4.25,4.25,0,0,1,2.9,1.2h1.6a.1.1,0,0,0,.1-.1V3.05Zm-.1,4.6h-1.5a1.52,1.52,0,0,1-1.5-1.4c.1,0,0-.1,0-.1a1.23,1.23,0,0,0-.8.4v.2c-.6,1.8.1,2.4.9,2.4h1.1a.1.1,0,0,1,.1.1v.4a.1.1,0,0,0,.1.1,3.81,3.81,0,0,0,1.7-.8V7.75C106.84,7.75,106.74,7.65,106.64,7.65Z" transform="translate(-0.07 -1.05)" />
              <path d="M106.64,12.05h0a7,7,0,0,1-2.5.5,6.81,6.81,0,0,1-6.8-6.8,7,7,0,0,1,.5-2.5c0-.1-.1-.1-.2-.1h-.1a6.44,6.44,0,0,0-1.7,4.5,6.38,6.38,0,0,0,6.4,6.4,6.28,6.28,0,0,0,4.4-1.8v-.1C106.74,12.15,106.64,12.05,106.64,12.05Z" transform="translate(-0.07 -1.05)" />
              <path d="M50,12.55h-6.1a1.47,1.47,0,0,1-1.6-1.6V1.25a.1.1,0,0,0-.1-.1A1.68,1.68,0,0,0,40.39,3v9.3a1.68,1.68,0,0,0,1.8,1.8h6.4a1.35,1.35,0,0,0,1.4-1.3v-.1C50.09,12.65,50.09,12.55,50,12.55ZM18.1,12.46c-.6-.1-.9-.6-.9-1.3V1.26a.1.1,0,0,0-.1-.1h-.4a1.42,1.42,0,0,0-1.5,1.5v9.9a1.42,1.42,0,0,0,1.5,1.5,1.54,1.54,0,0,0,1.5-1.5C18.2,12.46,18.2,12.46,18.1,12.46Zm8.2,0h-.2a1.89,1.89,0,0,1-1.8-1.1L19.8,4l-.1-.1a.1.1,0,0,0-.1.1v4.2l2.8,4.7a2.22,2.22,0,0,0,2,1.2,2,2,0,0,0,2-1.4C26.4,12.46,26.3,12.46,26.3,12.46Zm-.9-3.8a.1.1,0,0,0,.1-.1V1.26c0-.1,0-.1-.1-.1H25a1.42,1.42,0,0,0-1.5,1.5v3.1l1.7,2.8C25.3,8.56,25.3,8.66,25.4,8.66Zm9.29,3.79a1.11,1.11,0,0,1-.9-1.2v-10c0-.1,0-.1-.1-.1h-.3a1.42,1.42,0,0,0-1.5,1.5v9.9a1.42,1.42,0,0,0,1.5,1.5,1.54,1.54,0,0,0,1.5-1.5Zm87.18-.5h-.1a6.18,6.18,0,0,1-2.5.5,4.82,4.82,0,0,1-3.7-1.4,6.07,6.07,0,0,1-1.4-4.2V1.15c0-.1,0-.1-.1-.1h-.3a1.42,1.42,0,0,0-1.5,1.5v5.6c0,3.7,2,5.9,5.4,5.9a5.17,5.17,0,0,0,4.3-1.9v-.1C122,12,122,12,121.87,12Z" transform="translate(-0.07 -1.05)" />
              <path d="M121.87,1.45h-.3a1.42,1.42,0,0,0-1.5,1.5v5.7a4.84,4.84,0,0,1-.3,1.8.1.1,0,0,0,.1.1q2.1-.45,2.1-3.3V1.55A.1.1,0,0,0,121.87,1.45ZM4.4,8.65,5.8,9c1.5.3,1.6.8,1.6,1.2a.1.1,0,0,0,.1.1c1.1-.1,1.8-.7,1.8-1.5s-.6-1.2-1.9-1.5L6,7c-3.2-.6-3.8-2.3-3.8-3.6a3.29,3.29,0,0,1,.6-1.9v-.2a.1.1,0,0,0-.1-.1A3.64,3.64,0,0,0,.4,4.55C.3,6.85,1.7,8.25,4.4,8.65Zm5.2,3.2h0a6.71,6.71,0,0,1-2.8.6,7.36,7.36,0,0,1-4.3-1.4,1.39,1.39,0,0,1-.5-1c0-.1,0-.1-.1-.1s-.3-.1-.4-.1a1.38,1.38,0,0,0-1.1.6,1.43,1.43,0,0,0-.3,1.1,2.07,2.07,0,0,0,.6,1,7.38,7.38,0,0,0,4.5,1.5,5.31,5.31,0,0,0,4.5-1.9v-.1C9.7,12,9.7,11.85,9.6,11.85Z" transform="translate(-0.07 -1.05)" />
              <path d="M4.6,3.71a.1.1,0,0,0,.1.1h.2a3.65,3.65,0,0,1,2.4.8,1.69,1.69,0,0,0,1,.3,1.38,1.38,0,0,0,1.1-.6,1.61,1.61,0,0,0,.3-.9c0-.1,0-.1-.1-.1s-.3-.1-.5-.2a3.74,3.74,0,0,0-2.6-.9c-1.2,0-2,.6-2,1.4C4.6,3.61,4.6,3.61,4.6,3.71Z" transform="translate(-0.07 -1.05)" />
              <path d="M65.16,12.55h-6.1a1.47,1.47,0,0,1-1.6-1.6V1.25a.1.1,0,0,0-.1-.1A1.68,1.68,0,0,0,55.56,3v9.3a1.68,1.68,0,0,0,1.8,1.8h6.4a1.35,1.35,0,0,0,1.4-1.3v-.1C65.26,12.65,65.26,12.55,65.16,12.55Z" transform="translate(-0.07 -1.05)" />
              <path d="M73.44,12.45a1.11,1.11,0,0,1-.9-1.2v-10c0-.1,0-.1-.1-.1h-.3a1.42,1.42,0,0,0-1.5,1.5v9.9a1.42,1.42,0,0,0,1.5,1.5,1.54,1.54,0,0,0,1.5-1.5Z" transform="translate(-0.07 -1.05)" />
              <path d="M79.14,12.55a1.42,1.42,0,0,0,1.5,1.5,1.54,1.54,0,0,0,1.5-1.5c0-.1,0-.1-.1-.1-.6-.1-.9-.6-.9-1.3V1.25a.1.1,0,0,0-.1-.1h-.4a1.42,1.42,0,0,0-1.5,1.5" transform="translate(-0.07 -1.05)" />
              <path d="M90.34,12.65c0-.2-.1-.2-.1-.2H90a1.89,1.89,0,0,1-1.8-1.1L83.74,4l-.1-.1a.1.1,0,0,0-.1.1v4.2l2.8,4.7a2.22,2.22,0,0,0,2,1.2,2,2,0,0,0,2-1.4" transform="translate(-0.07 -1.05)" />
              <path d="M89.34,8.65a.1.1,0,0,0,.1-.1V1.25c0-.1,0-.1-.1-.1h-.4a1.42,1.42,0,0,0-1.5,1.5v3.1l1.7,2.8C89.24,8.55,89.24,8.65,89.34,8.65Z" transform="translate(-0.07 -1.05)" />
              <path d="M127.47,12.5A1.42,1.42,0,0,0,129,14a1.54,1.54,0,0,0,1.5-1.5c0-.1,0-.1-.1-.1-.6-.1-.9-.6-.9-1.3V1.2a.1.1,0,0,0-.1-.1H129a1.42,1.42,0,0,0-1.5,1.5" transform="translate(-0.07 -1.05)" />
              <path d="M136.62,12.6c0-.2-.1-.2-.1-.2h-.2a1.89,1.89,0,0,1-1.8-1.1l-2.33-3.65-.1-.1a.1.1,0,0,0-.1.1v4.2l.63,1a2.22,2.22,0,0,0,2,1.2,2,2,0,0,0,2-1.4" transform="translate(-0.07 -1.05)" />
              <path d="M135.77,3.54h0a2.13,2.13,0,0,0-1.73-1,2.19,2.19,0,0,0-1.74.87c-.13.16-.19.32-.31.48V4c0,.08.06.08.06.08a1.63,1.63,0,0,1,.87-.24c.68,0,1.46.11,1.61.95,0,.08.44.31.73.15a1,1,0,0,0,.54-.6,1.29,1.29,0,0,0,0-.82Z" transform="translate(-0.07 -1.05)" />
            </svg>
          </Link>
        </div>
        <div className="right-nav">{this.renderSession()}</div>

      </header>
    )
  }

}

export default withRouter(NavBar);