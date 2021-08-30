export const removeDuplicatesFromArray = <T>(arr: T[]) => {
  return Array.from(new Set(arr));
};
