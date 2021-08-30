import { areArraysOfObjectsEqual } from './areArraysOfObjectsEqual';

describe('areArraysOfObjectsEqual', () => {
  test('different array length', () => {
    const arr1 = [{ id: 1 }];
    const arr2 = [{ id: 1 }, { id: 2 }];

    expect(areArraysOfObjectsEqual(arr1, arr2, ['id'])).toBe(false);
  });

  test('by one argument', () => {
    const arr1 = [{ name: 'name', age: 100 }, { name: 'name2', age: 90 }];
    const arr2 = [{ name: 'name', age: 25 }, { name: 'name2', age: 30 }];

    expect(areArraysOfObjectsEqual(arr1, arr2, ['name'])).toBe(true);
    expect(areArraysOfObjectsEqual(arr1, arr2, ['age'])).toBe(false);
  });

  test('by meny properties', () => {
    const arr1 = [{ name: 'name', age: 25, hasChild: false }, { name: 'name2', age: 30, hasChild: true }];
    const arr2 = [{ name: 'name', age: 25, hasChild: false }, { name: 'name2', age: 30, hasChild: false }];

    expect(areArraysOfObjectsEqual(arr1, arr2, ['name', 'age'])).toBe(true);
    expect(areArraysOfObjectsEqual(arr1, arr2, ['name', 'age', 'hasChild'])).toBe(false);
  });
});
