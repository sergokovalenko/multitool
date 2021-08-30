export const removeDuplicatesFromArrayOfObjectsByKey = <T, K extends keyof T>(arr: T[], objectKey: K) => {
  return Array.from((new Map(arr.map(el => [el[objectKey], el]))).values());
};
