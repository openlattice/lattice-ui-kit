/*
 * @flow
 */

const stopPropagation = (event :SyntheticEvent<HTMLElement>) => {
  event.stopPropagation();
};

export default stopPropagation;
