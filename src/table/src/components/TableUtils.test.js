import {
  descendByProperty,
  getComparator,
  getSortedData,
  createOption,
  getRowsPerPageOptions,
} from './TableUtils';

describe('TableUtils', () => {
  const a = { foo: 'bar' };
  const b = { foo: 'baz' };
  const c = { foo: 'bar' };
  const data = [a, b, c];

  describe('descendByProperty', () => {

    test('should return 1 if property at a < b', () => {
      expect(descendByProperty(a, b, 'foo')).toEqual(1);
    });

    test('should return -1 if property at a > b', () => {
      expect(descendByProperty(b, a, 'foo')).toEqual(-1);
    });

    test('should return 0 if property at a = c', () => {
      expect(descendByProperty(a, c, 'foo')).toEqual(0);
    });

    test('should return 0 if property does not exist in either a or b', () => {
      expect(descendByProperty(a, b, 'missing')).toEqual(0);
    });

    test('should return 0 if property is undefined', () => {
      expect(descendByProperty(a, b)).toEqual(0);
    });
  });

  describe('getComparator', () => {

    test('should return a function', () => {
      expect(typeof getComparator('asc')).toEqual('function');
      expect(typeof getComparator('desc')).toEqual('function');
      expect(typeof getComparator('asc', 'property')).toEqual('function');
      expect(typeof getComparator('desc', 'property')).toEqual('function');
    });

    test('should return an descending comparator function by property when order="desc"', () => {
      const cmp = getComparator('desc', 'foo');
      expect(cmp(a, b)).toEqual(1);
      expect(cmp(b, a)).toEqual(-1);
      expect(cmp(a, c)).toEqual(0);
    });

    test('should return a negative descending comparator function by property when order="asc"', () => {
      const cmp = getComparator('asc', 'foo');
      expect(cmp(a, b)).toEqual(-1);
      expect(cmp(b, a)).toEqual(1);
      expect(cmp(a, c)).toEqual(-0); // wat
    });
  });

  describe('getSortedData', () => {
    test('should sort data by property in asc order', () => {
      const sortedData = getSortedData(data, 'asc', 'foo');
      expect(sortedData).toEqual([a, c, b]);
    });

    test('should sort data by property in desc order', () => {
      const sortedData = getSortedData(data, 'desc', 'foo');
      expect(sortedData).toEqual([b, a, c]);
    });

    test('should sort data by property in asc without order', () => {
      const sortedData = getSortedData(data, undefined, 'foo');
      expect(sortedData).toEqual([a, c, b]);
    });

    test('should not sort data without property', () => {
      const sortedData = getSortedData(data);
      expect(sortedData).toEqual([a, b, c]);
    });
  });

  describe('createOption', () => {
    test('should return object with label and value properties', () => {
      const newOption = createOption('something');
      expect(newOption).toEqual({ label: 'something', value: 'something' });
    });

    test('should returned label property should be string', () => {
      const newOption = createOption(5);
      expect(typeof newOption.label).toEqual('string');
    });
  });

  describe('getRowsPerPageOptions', () => {
    test('should return list of option objects from list', () => {
      const options = getRowsPerPageOptions([1, 2, 3]);
      expect(options).toEqual([
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
        {
          label: '3',
          value: 3,
        },
      ]);
    });

    test('should return list of single option if rowsPerPageOptions is empty and second param is provided', () => {
      const options = getRowsPerPageOptions([], 20);
      expect(options).toEqual([
        {
          label: '20',
          value: 20,
        },
      ]);
    });

    test('should return empty list if no params provided', () => {
      const options = getRowsPerPageOptions();
      expect(options).toEqual([]);
    });
  });
});
