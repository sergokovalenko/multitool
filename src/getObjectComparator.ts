export const getObjectComparator = <T>(comparableProperty: keyof T, order: 'asc' | 'desc' = 'asc') => {
  return (a: T, b: T) => {
    let result = 0;

    if (a[comparableProperty] < b[comparableProperty]) {
      result = -1;
    } else if (a[comparableProperty] > b[comparableProperty]) {
      result = 1;
    }

    return order === 'asc' ? result : result * -1;
  };
};
