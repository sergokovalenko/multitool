import { removeDuplicatesFromArrayOfObjectsByKey } from './removeDuplicatesFromArrayOfObjectsByKey';

describe('removeDuplicatesFromArrayOfObjectsByKey', () => {
  test('removing duplicates', () => {
    const arr = [{ id: 1, name: 'name' }, { id: 1, name: 'name' }, { id: 2, name: 'name' }];
    const removedBiNames = removeDuplicatesFromArrayOfObjectsByKey(arr, 'name');

    expect(removeDuplicatesFromArrayOfObjectsByKey(arr, 'id')).toHaveLength(2);
    expect(removedBiNames).toHaveLength(1);
    expect(removedBiNames[0].name).toBe('name');
    expect(removedBiNames[0].id).toBe(2);
  });

  test('Comparing different objects', () => {
    const arr = [
      { id: { someObject: 'withField' }, name: 'name' },
      { id: { someObject: 'withField' }, name: 'name' }
    ];

    expect(removeDuplicatesFromArrayOfObjectsByKey(arr, 'id')).toHaveLength(2);
  });

  test('Comparing same object', () => {
    const id = { someObject: 'withField' };
    const arr = [
      { id, name: 'name' },
      { id, name: 'name' }
    ];

    expect(removeDuplicatesFromArrayOfObjectsByKey(arr, 'id')).toHaveLength(1);
  });
});
