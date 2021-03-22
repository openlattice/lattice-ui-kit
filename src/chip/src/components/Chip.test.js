import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Chip from './Chip';
import ChipColors from './colors';
import { hexToRgb } from '../../../utils/testing/ColorUtils';

import * as Colors from '../../../colors';

const { NEUTRAL } = Colors;

describe('Chip', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Chip />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  test('default', () => {
    const wrapper = mount(<Chip />);
    const chip = wrapper.find(Chip);
    expect(chip).toHaveLength(1);
    expect(window.getComputedStyle(chip.getDOMNode())).toHaveProperty('color', hexToRgb(NEUTRAL.N600));
    expect(window.getComputedStyle(chip.getDOMNode())).toHaveProperty('background', hexToRgb(NEUTRAL.N00));
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('test custom colors', () => {

    Object.entries(ChipColors).forEach(([color, attributes]) => {
      test(`color = ${color}`, () => {
        const wrapper = mount(<Chip color={color} />);
        const chip = wrapper.find(Chip);
        expect(chip).toHaveLength(1);
        if (color !== 'primary' && color !== 'secondary') {
          expect(window.getComputedStyle(chip.getDOMNode()))
            .toHaveProperty('color', hexToRgb(attributes.color));
          expect(window.getComputedStyle(chip.getDOMNode()))
            .toHaveProperty('background', hexToRgb(attributes.background));
        }
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });

  });
});
