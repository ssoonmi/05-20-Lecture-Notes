import React from 'react';

import OwnersList from './OwnersList';
import PetDetailList from './PetDetailList';

const PetDetails = props =>
  <>
    <PetDetailList pet={props.pet} />
    <OwnersList owners={props.pet.Owners} />
  </>
;

PetDetails.defaultProps = {
  pet: {
    PetType: {},
  },
};

export default PetDetails;
