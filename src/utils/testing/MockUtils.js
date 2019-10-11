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

function genSelectOptions() {

  const stressOptions = [];
  for (let i = 0; i < 2000; i += 1) {
    const string = genRandomString();
    stressOptions.push({ label: string, value: string });
  }
  return stressOptions;
}

function genRealWordSelectOptions(text :paragraph) {

  const stressOptions = [];
  const words = text.split(' ');
  for (let i = 0; i < 2000; i += 1) {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    stressOptions.push({ label: randomWord, value: randomWord });
  }
  return stressOptions;
}

export {
  genRandomString,
  genRealWordSelectOptions,
  genSelectOptions,
  nope,
};
