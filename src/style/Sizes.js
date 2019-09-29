/*
 * @flow
 */

const APP_CONTENT_PADDING :number = 30;
const APP_CONTENT_WIDTH :number = 960 + (APP_CONTENT_PADDING * 2);

const APP_CONTAINER_MAX_WIDTH :number = 2000;
const APP_CONTAINER_MIN_WIDTH :number = APP_CONTENT_WIDTH; // 1020 = 960 for content + 2*30 for edges padding

export {
  APP_CONTAINER_MAX_WIDTH,
  APP_CONTAINER_MIN_WIDTH,
  APP_CONTENT_PADDING,
  APP_CONTENT_WIDTH,
};
