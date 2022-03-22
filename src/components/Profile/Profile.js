import React from "react";
import "./profile.scss";
import textPhoto from "../../img/no_image.png";

const Profile = () => {
  return (
    <section className="grid">
      <div className="image-container">
        <img></img>
      </div>
      <div className="info-block">
        <p>
          <span>Name</span>
        </p>
        <p>
          <span>Last name</span>
        </p>
        <p>
          <span>unique ID</span>
        </p>
      </div>
      <ul className="media-block">
        <li className="media-content">
          <img src={textPhoto} alt="test photo"></img>
        </li>
        <li className="media-content">
          <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="test photo"></img>
        </li>
        <li className="media-content">
          <img src="https://static.remove.bg/remove-bg-web/a2638b9b3f30bb28808115b5b18d35d0fd9db4c8/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="test photo"></img>
        </li>
        <li className="media-content">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="test photo"></img>
        </li>
        <li className="media-content">
          <img src={textPhoto} alt="test photo"></img>
        </li>
        <li className="media-content">
          <img src={textPhoto} alt="test photo"></img>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
