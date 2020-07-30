/*
 * @flow
 */

import React from 'react';

import toJson from 'enzyme-to-json';
import { faSpaceShuttle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import IconButton from './IconButton';

const LaunchIcon = (
  <FontAwesomeIcon icon={faSpaceShuttle} rotate={-45} />
);

describe('IconButton', () => {

  describe('snapshots', () => {

    test('default', () => {
      const iconButton = mount(
        <IconButton>
          {LaunchIcon}
        </IconButton>
      );
      expect(toJson(iconButton)).toMatchSnapshot();
    });

    test('spinner', () => {
      const iconButton = mount(
        <IconButton isLoading>
          {LaunchIcon}
        </IconButton>
      );
      expect(toJson(iconButton)).toMatchSnapshot();
    });

  });

});
