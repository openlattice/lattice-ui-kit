/*
 * @flow
 */

import React from 'react';

import toJson from 'enzyme-to-json';
import { faCode } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import IconButton from './IconButton';

const CodeIcon = (
  <FontAwesomeIcon icon={faCode} />
);

describe('IconButton', () => {

  describe('snapshots', () => {

    test('default', () => {
      const iconButton = mount(<IconButton>{CodeIcon}</IconButton>);
      expect(toJson(iconButton)).toMatchSnapshot();
    });

    test('spinner', () => {
      const iconButton = mount(<IconButton isLoading>{CodeIcon}</IconButton>);
      expect(toJson(iconButton)).toMatchSnapshot();
    });

  });

});
