import { getObjectComparator } from './getObjectComparator';

describe('getObjectComparator', () => {
  const comparatorFunctionASC = getObjectComparator('name');
  const comparatorFunctionDESC = getObjectComparator('name', 'desc');

  it('The first argument is greater than second one ASC', () => {
    expect(comparatorFunctionASC({ name: 'abcdefg' }, { name: 'abcd' })).toBe(1);
  });

  it('The first argument is less than second one ASC', () => {
    expect(comparatorFunctionASC({ name: 'abcd' }, { name: 'abcdefg' })).toBe(-1);
  });

  it('The first argument is greater than second one DESC', () => {
    expect(comparatorFunctionDESC({ name: 'abcdefg' }, { name: 'abcd' })).toBe(-1);
  });

  it('The first argument is less than second one DESC', () => {
    expect(comparatorFunctionDESC({ name: 'abcd' }, { name: 'abcdefg' })).toBe(1);
  });

  it('Equal values', () => {
    expect(comparatorFunctionASC({ name: 'abcd' }, { name: 'abcd' })).toBe(0);
  });
});
