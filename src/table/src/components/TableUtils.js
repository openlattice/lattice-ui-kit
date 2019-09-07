// @flow
import isEmpty from 'lodash/isEmpty';
import type { SortOrder } from '../../types';
import type { ReactSelectOption } from '../../../select/types';

const descendByProperty = (a :Object, b :Object, property ? :string) => {
  if (a[property] < b[property]) {
    return 1;
  }
  if (a[property] > b[property]) {
    return -1;
  }

  return 0;
};

const getComparator = (order :SortOrder = false, property ? :string) => {
  const comparator = order === 'desc'
    ? (a :Object, b :Object) => descendByProperty(a, b, property)
    : (a :Object, b :Object) => -descendByProperty(a, b, property);

  return comparator;
};

const getSortedData = (data :Array<Object>, order ? :SortOrder, orderBy ? :string) :Array<Object> => {
  const copyData :Array<Object> = [...data];
  const comparator = getComparator(order, orderBy);

  return copyData.sort(comparator);
};

const createOption = (value :any) :ReactSelectOption => ({ label: `${value}`, value });

const getRowsPerPageOptions = (rowsPerPageOptions :number[] = [], defaultRowCount ? :number) => {
  if (!isEmpty(rowsPerPageOptions)) {
    return rowsPerPageOptions.map<ReactSelectOption>(createOption);
  }

  if (typeof defaultRowCount === 'number') {
    return [createOption(defaultRowCount)];
  }

  return [];
};


export {
  descendByProperty,
  getComparator,
  getSortedData,
  createOption,
  getRowsPerPageOptions,
};
