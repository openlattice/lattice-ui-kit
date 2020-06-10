import { capitalize } from '@material-ui/core';
import {
  curry,
  map,
  mergeAll
} from 'lodash/fp';

const cartesianProduct = curry((a, b) => {
  let idx = 0;
  const ilen = a.length;
  const jlen = b.length;
  const result = [];
  while (idx < ilen) {
    let j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
}, 2);

const empty = (value) => value === undefined || value === null || value === '';

export const styleName = (variant, color) => (empty(variant) ? color : `${variant}${capitalize(color)}`);

const createColorStyles = (variants, colors, template, theme) => mergeAll(
  map(
    ([variant, color]) => ({
      [styleName(variant, color)]: template(variant, color, theme)
    }),
    cartesianProduct(variants, colors)
  )
);

export default curry(createColorStyles);
