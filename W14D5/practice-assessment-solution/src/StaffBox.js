import React from 'react';

const StaffBox = props =>
  <div className="staff-box">
    <div className="staff-box__name">{props.name}</div>
    <div className="staff-box__title">{props.title}</div>
    <img alt={props.name} className="staff-box__photo" src={props.photo} />
  </div>
;

export default StaffBox;
