import React from 'react';

const OwnerLink = props =>
  <a href={props.href}>
    {props.lastName}, {props.firstName}
  </a>
;

export default OwnerLink;
