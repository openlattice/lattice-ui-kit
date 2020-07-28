/*
 * @flow
 */

import stopPropagation from './stopPropagation';
import { INVALID_PARAMS } from './testing/InvalidParams';

describe('stopPropagation', () => {

  test('should not throw when given valid parameters', () => {
    const errors = [];
    INVALID_PARAMS.forEach((invalidParam) => {
      try {
        stopPropagation(invalidParam);
      }
      catch (e) {
        errors.push(`expected not to throw - stopPropagation(${JSON.stringify(invalidParam)})`);
      }
    });
    expect(errors).toEqual([]);
  });

});
