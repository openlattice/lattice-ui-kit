/*
 * @flow
 */

import stopPropagation from './stopPropagation';
import { INVALID_PARAMS } from './testing/InvalidParams';

describe('stopPropagation', () => {

  test('should invoke stopPropagation()', () => {
    const mockFn = jest.fn();
    // $FlowFixMe
    stopPropagation({ stopPropagation: mockFn });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should not throw when given invalid parameters', () => {
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
