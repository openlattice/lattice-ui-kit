import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { getStyleVariation } from './StyleUtils';
import {
  GREEN_1,
  NEUTRALS,
  RED_1,
  YELLOW_1,
} from '../colors';

const mockVariations = {
  default: NEUTRALS[0],
  success: GREEN_1,
  danger: RED_1,
  warning: YELLOW_1
};

const mockProps = {
  mode: 'default'
};

const mockPropsInvalid = {
  open: 'lattice'
};

describe('StyleUtils', () => {

  describe('getStyleVariation', () => {
    test('should return function', () => {
      const backgroundColor = getStyleVariation('mode', mockVariations);
      expect(backgroundColor).toEqual(expect.any(Function));
    });

    test('should return value for matching prop and variation', () => {
      const backgroundColor = getStyleVariation('mode', mockVariations);
      expect(backgroundColor(mockProps)).toEqual(NEUTRALS[0]);
    });

    test('should return undefined for non matching variation', () => {
      const backgroundColor = getStyleVariation('mode', mockVariations);
      expect(backgroundColor(mockPropsInvalid)).toBeUndefined();
    });

    test('styled component should apply style for matching variation', () => {
      const backgroundColor = getStyleVariation('mode', mockVariations);
      const StyledDiv = styled.div`
        background-color: ${backgroundColor};
      `;

      const wrapper = mount(<StyledDiv mode="success" />);
      expect(wrapper).toHaveStyleRule('background-color', mockVariations.success);
    });

    test('styled component should not apply style for invalid variation', () => {
      const backgroundColor = getStyleVariation('mode', mockVariations);
      const StyledDiv = styled.div`
        background-color: ${backgroundColor};
      `;

      const wrapper = mount(<StyledDiv invalidProp="success" />);
      expect(wrapper).not.toHaveStyleRule('background-color', mockVariations.success);
    });
  });

});
