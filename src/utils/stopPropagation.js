/*
 * @flow
 */

import _isFunction from 'lodash/isFunction';

const stopPropagation = (event :SyntheticEvent<HTMLElement>) => {
  if (event && _isFunction(event.stopPropagation)) {
    event.stopPropagation();
  }
};

export default stopPropagation;
