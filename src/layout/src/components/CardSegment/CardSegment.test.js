import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CardSegment from './CardSegment';

describe('CardSegment', () => {

  describe('snapshots', () => {

    test('Without child', () => {
      const wrapper = mount(<CardSegment />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with > 1 child', () => {
      const wrapper = mount((
        <CardSegment>
          <div>child 1</div>
          <div>child 2</div>
        </CardSegment>
      ));
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    test('should render div', () => {
      const wrapper = mount(<CardSegment />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

    describe('Computed styles', () => {

      test('bgColor', () => {
        const wrapper = mount(<CardSegment bgColor="#ffffff" />);
        expect(wrapper).toHaveStyleRule('background-color', '#ffffff');
      });

      test('onClick', () => {
        const wrapper = mount(<CardSegment onClick={() => {}} />);
        expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
          modifier: ':hover'
        });
      });

      test('padding - sm', () => {
        const wrapper = mount(<CardSegment padding="sm" />);
        expect(wrapper).toHaveStyleRule('padding', '10px 30px');
      });

      test('padding - md', () => {
        const wrapper = mount(<CardSegment padding="md" />);
        expect(wrapper).toHaveStyleRule('padding', '20px 30px');
      });

      test('vertical', () => {
        const wrapper = mount(<CardSegment vertical />);
        expect(wrapper).toHaveStyleRule('flex-direction', 'column');
      });

    });

  });

});
