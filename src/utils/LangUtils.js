/*
 * @flow
 */

import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import trim from 'lodash/trim';

function isEmptyString(value :any) :boolean {

  return isString(value) && isEmpty(value);
}

function isNonEmptyString(value :any) :boolean {

  return isString(value) && !isEmpty(trim(value));
}

export {
  isEmptyString,
  isNonEmptyString,
};
