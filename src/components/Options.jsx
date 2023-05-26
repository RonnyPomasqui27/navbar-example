import React from 'react';

const Options = () => {

  return (
    <section className='option_container'>
      <div className="option_select">
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </div>
      <div className="option_select">
        <i className="fa-regular fa-clipboard"></i>
        <p>Post</p>
      </div>
      <div className="option_select">
        <i className="fa-regular fa-message"></i>
        <p>Messanger</p>
      </div>
      <div className="option_select">
        <i className="fa-solid fa-user-group"></i>
        <p>Friends</p>
      </div>
      <div className="option_select">
        <i className="fa-solid fa-check"></i>
        <p>Notifications</p>
      </div>
      <div className="option_select">
        <i className="fa-solid fa-people-group"></i>
        <p>Gropus</p>
      </div>
      <div className="row2"></div>
      <div className="option_select">
        <i className="fa-regular fa-flag"></i>
        <p>Pages</p>
      </div>
      <div className="option_select">
        <i className="fa-solid fa-gamepad"></i>
        <p>Games</p>
      </div>
      <div className="option_select">
        <i className="fa-solid fa-gear"></i>
        <p>Settings</p>
      </div>
      <div className="row2"></div>
      <div className="option_select">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p>Log Out</p>
      </div>
    </section>
  );
};

export default Options;