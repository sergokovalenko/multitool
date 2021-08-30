export const areArraysOfObjectsEqual = <T>(deps1: T[], deps2: T[], fieldsToCompare: (keyof T)[]) => {
  if (deps1.length !== deps2.length) {
    return false;
  }

  return !deps1.some((el, i) => {
    return fieldsToCompare.some(field => el[field] !== deps2[i][field]);
  });
};
