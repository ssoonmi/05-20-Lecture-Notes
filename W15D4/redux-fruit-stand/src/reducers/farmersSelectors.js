
export const getAllFarmers = ({ farmers }) => (
  Object.keys(farmers).map(id => farmers[id])
);
