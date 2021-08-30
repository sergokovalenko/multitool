import { removeDuplicatesFromArray } from './removeDuplicatesFromArray';

describe('removeDuplicatesFromArray', () => {
  test('removes duplicates from strings array', () => {
    expect(removeDuplicatesFromArray(['1', '1', '2', '3'])).toMatchObject(['1', '2', '3']);
  });

  test('retain case difference', () => {
    expect(removeDuplicatesFromArray(['case', 'Case'])).toMatchObject(['case', 'Case']);
  });

  test('same structure, but different links', () => {
    expect(removeDuplicatesFromArray([{ id: 'id' }, { id: 'id' }])).toHaveLength(2);
  });

  test('same object', () => {
    const obj = { id: 'id' };

    expect(removeDuplicatesFromArray([obj, obj, obj])).toHaveLength(1);
  });
});
