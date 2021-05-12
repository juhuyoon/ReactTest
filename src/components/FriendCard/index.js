import React from 'react';
import './style.css';

// Parameters/arguments we pass into our FriendCard function
function FriendCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Color</strong> {props.color}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
