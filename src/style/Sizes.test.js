import { Map } from 'immutable';

import * as Sizes from './Sizes';

const EXPECTED = Map({
  APP_CONTAINER_MAX_WIDTH: 2000,
  APP_CONTAINER_MIN_WIDTH: 1020,
  APP_CONTENT_PADDING: 30,
  APP_CONTENT_WIDTH: 1020,
});

describe('Sizes', () => {

  EXPECTED.forEach((value, key) => {
    test(`should export "${key}: ${value}"`, () => {
      expect(Sizes).toHaveProperty(key);
      expect(Sizes[key]).toEqual(value);
    });
  });

});
