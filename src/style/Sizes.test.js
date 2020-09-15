import { Map } from 'immutable';

import * as Sizes from './Sizes';

const EXPECTED = Map({
  APP_CONTENT_PADDING: 32,
  APP_CONTENT_WIDTH: 1104,
});

describe('Sizes', () => {

  EXPECTED.forEach((value, key) => {
    test(`should export "${key}: ${value}"`, () => {
      expect(Sizes).toHaveProperty(key);
      expect(Sizes[key]).toEqual(value);
    });
  });

});
