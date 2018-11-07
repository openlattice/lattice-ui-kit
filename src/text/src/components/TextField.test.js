import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import TextField from './TextField';
import { nope } from '../../../utils/testing/MockUtils';

describe('overlay', () => {

  const mTextField = mount(
    <TextField onChange={nope} type="text" />
  );

  const mTextAreaField = mount(
    <TextField onChange={nope} type="textarea" />
  );

  describe('snapshots', () => {

    test('should match snapshot when type="text"', () => {
      expect(toJson(mTextField)).toMatchSnapshot();
    });

    test('should match snapshot when type="textarea"', () => {
      expect(toJson(mTextAreaField)).toMatchSnapshot();
    });

    test('testing...', () => {

      const t = (
        <TextField type="textareafield" onChange={() => {}} />
      );
    });

  });

  describe('props', () => {

  });

  describe('state', () => {

  });

});
