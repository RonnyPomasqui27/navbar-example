import React from 'react';

const Profile = () => {
  return (
    <section className='profile_container'>
      <div className="row"></div>
      <div className="user_cont">
        <div className="total_user">
          <div className="user_img">
            <img src="https://i.pinimg.com/originals/23/1e/c7/231ec7e73424e49325eef84e9d0134d1.jpg" alt="foto de perfil" />
          </div>
          <div className="user_name">
            <h2>RoMaAr.Dev</h2>
            <p>My Account</p>
          </div>
        </div>
        <div className="row_bottom">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Profile;