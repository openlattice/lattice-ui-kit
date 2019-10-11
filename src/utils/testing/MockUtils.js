/*
 * @flow
 */

/* eslint-disable import/prefer-default-export */

function nope() :void {}

function genRandomString() :string {

  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  // not meant to be a cryptographically strong random id, useful in unit tests
  return Math.random().toString(36).slice(2);
}

function genRealWordSelectOptions(text :string) {

  const stressOptions = [];
  const words = text.split(' ');
  for (let i = 0; i < 2000; i += 1) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    stressOptions.push({ label: randomWord, value: randomWord });
  }
  return stressOptions;
}

export {
  genRandomString,
  genRealWordSelectOptions,
  nope,
};
