import React from "react";

const Usercard = ({ name, role }) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
    </div>
  );
};
export default Usercard;
