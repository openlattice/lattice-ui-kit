import React from 'react';

import toJson from 'enzyme-to-json';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount } from 'enzyme';

import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {

  test('should match snapshot', () => {
    const wrapper = mount(
      <Breadcrumbs>
        <span>Foo</span>
        <span>Bar</span>
        <span>Baz</span>
      </Breadcrumbs>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render FontAwesomeIcon with faChevronRight as default separator', () => {
    const wrapper = mount(
      <Breadcrumbs>
        <span>Foo</span>
        <span>Bar</span>
        <span>Baz</span>
      </Breadcrumbs>
    );
    const separators = wrapper.find(FontAwesomeIcon);
    expect(separators).toHaveLength(2);
    separators.forEach((separator) => {
      expect(separator.prop('icon')).toEqual(faChevronRight);
    });
  });
});
