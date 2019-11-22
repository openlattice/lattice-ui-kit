import {
  ascendByProperty,
  getComparator,
  getSortedData,
  createOption,
  getRowsPerPageOptions,
} from './TableUtils';
import { TABLE_HEADERS } from '../../stories/constants';

describe('TableUtils', () => {
  const a = { foo: 'bar' };
  const b = { foo: 'baz' };
  const c = { foo: 'bar' };
  const data = [a, b, c];

  describe('ascendByProperty', () => {

    test('should return -1 if property at a < b', () => {
      expect(ascendByProperty(a, b, 'foo')).toEqual(-1);
    });

    test('should return 1 if property at a > b', () => {
      expect(ascendByProperty(b, a, 'foo')).toEqual(1);
    });

    test('should return 0 if property at a = c', () => {
      expect(ascendByProperty(a, c, 'foo')).toEqual(0);
    });

    test('should return 0 if property does not exist in either a or b', () => {
      expect(ascendByProperty(a, b, 'missing')).toEqual(0);
    });

    test('should return 0 if property is undefined', () => {
      expect(ascendByProperty(a, b)).toEqual(0);
    });

    test('should execute custom comparator function when provided', () => {
      const mockComparator = jest.fn();

      ascendByProperty(a, b, 'foo', mockComparator);
      expect(mockComparator).toHaveBeenCalledTimes(1);
      expect(mockComparator.mock.calls[0][0]).toEqual(a.foo);
      expect(mockComparator.mock.calls[0][1]).toEqual(b.foo);
    });
  });

  describe('getComparator', () => {

    test('should return a function', () => {
      expect(typeof getComparator(TABLE_HEADERS, 'asc')).toEqual('function');
      expect(typeof getComparator(TABLE_HEADERS, 'desc')).toEqual('function');
      expect(typeof getComparator(TABLE_HEADERS, 'asc', 'property')).toEqual('function');
      expect(typeof getComparator(TABLE_HEADERS, 'desc', 'property')).toEqual('function');
    });

    test('should return a negative ascending comparator function by property when order="desc"', () => {
      const cmp = getComparator(TABLE_HEADERS, 'desc', 'foo');
      expect(cmp(a, b)).toEqual(1);
      expect(cmp(b, a)).toEqual(-1);
      expect(cmp(a, c)).toEqual(-0); // wat
    });

    test('should return an ascending comparator function by property when order="asc"', () => {
      const cmp = getComparator(TABLE_HEADERS, 'asc', 'foo');
      expect(cmp(a, b)).toEqual(-1);
      expect(cmp(b, a)).toEqual(1);
      expect(cmp(a, c)).toEqual(0);
    });

    test('should execute custom comparator function from matching header definition', () => {
      const mockComparator = jest.fn();
      const CUSTOM_HEADERS = [{ key: 'foo', comparator: mockComparator }];

      const cmp = getComparator(CUSTOM_HEADERS, 'asc', 'foo');
      cmp(a, b);

      expect(mockComparator).toHaveBeenCalledTimes(1);
      expect(mockComparator.mock.calls[0][0]).toEqual(a.foo);
      expect(mockComparator.mock.calls[0][1]).toEqual(b.foo);
    });
  });

  describe('getSortedData', () => {
    test('should sort data by property in asc order', () => {
      const sortedData = getSortedData(TABLE_HEADERS, data, 'asc', 'foo');
      expect(sortedData).toEqual([a, c, b]);
    });

    test('should sort data by property in desc order', () => {
      const sortedData = getSortedData(TABLE_HEADERS, data, 'desc', 'foo');
      expect(sortedData).toEqual([b, a, c]);
    });

    test('should not sort data without order', () => {
      const sortedData = getSortedData(TABLE_HEADERS, data, undefined, 'foo');
      expect(sortedData).toEqual(data);
    });

    test('should not sort data without property', () => {
      const sortedData = getSortedData(TABLE_HEADERS, data, 'asc');
      expect(sortedData).toEqual(data);
    });

    test('should return empty array without data', () => {
      const sortedData = getSortedData(TABLE_HEADERS);
      expect(sortedData).toEqual([]);
    });

    test('should return empty array without params', () => {
      const sortedData = getSortedData();
      expect(sortedData).toEqual([]);
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
