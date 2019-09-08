import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
// import DefaultProfileImage from '../images/default-profile-image.jpg';

const MessageItem = ({date, profileImageUrl, text, username, isCorrectUser, removeMessage}) => (
  <div>
    <li className="list-group-item">

{/*      <img 
        src={profileImageUrl || DefaultProfileImage} 
        alt={username}
        height="100" width="100" className="timeline-image" 
      />
*/}
      <div className="message-are">
        <Link to='/'>@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment 
            className="text-muted"
            format="MMM Do"
          >{date}</Moment>
          <p>{text}</p>
          {/*
            isCorrectUser && (<a onClick={removeMessage} className="btn btn-danger">Delete</a>)
          */}
        </span>
      </div> 
    </li>     
  </div>
)

export default MessageItem;