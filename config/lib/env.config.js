/* eslint-disable arrow-body-style */
function ifElse(condition) {
  return (isTrue, isFalse) => {
    return condition ? isTrue : isFalse;
  };
}
/* eslint-enable */

const BUILD = process.env.BUILD || 'development';
const MINIMIZE = process.env.MINIMIZE || 'false';
const TARGET_ENV = process.env.TARGET_ENV || 'web';

const isDev = BUILD === 'development';
const isProd = BUILD === 'production';
const isTest = BUILD === 'test';

const ifDev = ifElse(isDev);
const ifProd = ifElse(isProd);
const ifTest = ifElse(isTest);

const ifMin = ifElse(MINIMIZE === 'true');

module.exports = {
  TARGET_ENV,
  ifDev,
  ifMin,
  ifProd,
  ifTest,
  isDev,
  isProd,
  isTest
};
