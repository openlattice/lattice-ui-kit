// @flow
import type { SortOrder } from '../../types';
import type { ReactSelectOption } from '../../../select/types';

const ascendByProperty = (
  a :Object,
  b :Object,
  property ? :string,
  comparator ? :(a :any, b :any) => number
) => {

  const valueA = a[property];
  const valueB = b[property];

  if (typeof comparator === 'function') {
    return comparator(valueA, valueB);
  }

  if (a[property] < b[property]) {
    return -1;
  }
  if (a[property] > b[property]) {
    return 1;
  }

  return 0;
};

const getComparator = (
  headers :Object[],
  order :SortOrder,
  property ? :string
) => {

  let customComparator;
  const header = headers.find((headerDef) => headerDef.key === property);
  if (typeof header === 'object') {
    customComparator = header.comparator;
  }

  const comparator = order === 'desc'
    ? (a :Object, b :Object) => -ascendByProperty(a, b, property, customComparator)
    : (a :Object, b :Object) => ascendByProperty(a, b, property, customComparator);

  return comparator;
};

const getSortedData = (
  headers :Object[] = [],
  data ? :Array<Object> = [],
  order ? :SortOrder,
  orderBy ? :string
) :Array<Object> => {

  if (!order) {
    return data;
  }

  const copyData :Array<Object> = [...data];
  const comparator = getComparator(headers, order, orderBy);

  return copyData.sort(comparator);
};

const createOption = (value :any) :ReactSelectOption => ({ label: `${value}`, value });

const getRowsPerPageOptions = (rowsPerPageOptions :number[] = [], defaultRowCount ? :number) => {
  if (rowsPerPageOptions.length) {
    return rowsPerPageOptions.map<ReactSelectOption>(createOption);
  }

  if (typeof defaultRowCount === 'number') {
    return [createOption(defaultRowCount)];
  }

  return [];
};

const getInitialRowsPerPage = (rowCount :number, rowsPerPageOptions ?:number[] = []) => {
  let initialRowsPerPage = rowCount || 5;
  if (rowsPerPageOptions.length) [initialRowsPerPage] = rowsPerPageOptions;

  return initialRowsPerPage;
};

export {
  ascendByProperty,
  getComparator,
  getSortedData,
  createOption,
  getInitialRowsPerPage,
  getRowsPerPageOptions,
};
