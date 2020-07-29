/* eslint-disable no-array-constructor, no-new-object, no-new-wrappers, no-multi-spaces */
const INVALID_PARAMS = [
  undefined,                      // 0
  null,                           // 1
  [],                             // 2
  new Array(),                    // 3
  {},                             // 4
  new Object(),                   // 5
  true,                           // 6
  false,                          // 7
  new Boolean(true),              // 8
  new Boolean(false),             // 9
  -1,                             // 10
  0,                              // 11
  1,                              // 12
  '',                             // 13
  ' ',                            // 14
  new String(),                   // 15
  'invalid_special_string_value', // 16
  /regex/,                        // 17
];
/* eslint-enable */

export {
  INVALID_PARAMS,
};
