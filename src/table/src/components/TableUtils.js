// @flow
import type { SortOrder } from '../../types';

const descendByProperty = (a :Object, b :Object, property ? :string) => {
  try {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }
  }
  catch (error) {
    throw new Error(error);
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

export {
  // eslint-disable-next-line import/prefer-default-export
  getSortedData
};
