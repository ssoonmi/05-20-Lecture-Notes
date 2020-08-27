
export const getDistinctFruit = ({ fruit }) => (
  Array.from(new Set(fruit)).sort()
);
