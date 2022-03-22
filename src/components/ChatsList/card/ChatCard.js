import React from "react";
import "./chatcard.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image">{/* <img></img> */}</div>
        <div className="right-side">
          <div className="text-information">
            <p className="name">
              <span className="name-info">Kotuynya</span>
              <div className="mute-image">
                  {/* <img></img> */}
              </div>
            </p>
            <p>
              <span className="message-text">
                Message lorem ipsum dolor asit melar
              </span>
            </p>
          </div>
          <div className="time-info">
            <p>
              <span>12:00</span>
            </p>
            <p>
              <span>3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
