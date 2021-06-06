import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    
<div className="card">
  <div className="card-content">
    <div className="media">
    <div class="media-left">
    <figure class="image is-100x100">
    <img src="https://lh3.googleusercontent.com/proxy/QsTHRlO-mVgewQ4r2DMw7c8nBxEuWTRhVUmzfOWDHjDl8I4SGMbG_4T0VXjzzlIAaeQwJ4VnPWkjlQJPP2tsuh2Kgsgb1zontYUxq3byZRThDXKne2TH" alt="avatar" />
    </figure>
      </div>
      <div className="media-content">
        <h4 style={{fontSize:"30px", marginBottom: "7px", fontWeight:"bolder"}}>{user.name}</h4>
        <h5 style={{fontSize:"30px", marginBottom: "7px", fontWeight:"bolder"}}>{user.username}</h5>
      </div>
    </div>
    <div className="content">
    <p style={{fontSize:"20px", fontWeight:"bold"}}>E-mail:<span style={{fontSize:"15px", fontWeight:"lighter"}}>{user.email}</span></p>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Address:
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.address.street}</span>
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.address.suite}</span>
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.address.city}</span>
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.address.zipcode}</span>
    </p>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Phone: 
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.phone}</span>
    </p>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Website: 
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.website}</span>
    </p>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Company: 
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.company.name}</span>
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.company.catchPhrase}</span>
    <span style={{fontSize:"15px" , fontWeight:"lighter"}}>{user.company.bs}</span>
    </p>
    </div>
  </div>
</div>
 
       
  );
};

export default UserCard;
