import React from "react";
import './ResList.css';

const ResList = (props) => {
    
    return (
      <div >
        <div className="backdrop" onClick={props.onConfirm}>
         
        </div>
        <div className="modal" >
          <div className="header">
            <h1>My Account/ Login</h1>
          </div>
          <div className="category">
            <ul className="rescategory">
              <li className="list">Men</li>
              <li className="list">Women</li>
              <li className="list">Kids</li>
              <li className="list">Baby</li>
              <li className="list">Sale</li>
            </ul>
          </div>
          <div className="resservices">
            <ul className="rescontact">
              <li className="list">Feedback</li>
              <li className="list">About Us</li>
              <li className="list">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ResList;

