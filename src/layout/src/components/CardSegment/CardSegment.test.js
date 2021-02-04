import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CardSegment from './CardSegment';

import { NEUTRAL } from '../../../../colors';

describe('CardSegment', () => {

  describe('snapshots', () => {

    test('without children', () => {
      const wrapper = mount(<CardSegment />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with children', () => {
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

    describe('computed styles', () => {

      test('bgColor', () => {
        const wrapper = mount(<CardSegment bgColor="#ffffff" />);
        expect(wrapper).toHaveStyleRule('background-color', '#ffffff');
      });

      test('padding - sm', () => {
        const wrapper = mount(<CardSegment padding="sm" />);
        expect(wrapper).toHaveStyleRule('padding', '10px 30px 10px 30px');
      });

      test('padding - md', () => {
        const wrapper = mount(<CardSegment padding="md" />);
        expect(wrapper).toHaveStyleRule('padding', '20px 30px 20px 30px');
      });

      test('vertical', () => {
        const wrapper = mount(<CardSegment vertical />);
        expect(wrapper).toHaveStyleRule('flex-direction', 'column');
      });

    });

  });

  describe('props', () => {

    describe('borderless', () => {

      test('should set border-bottom with "borderless=false"', () => {
        const wrapper = mount(<CardSegment />);
        expect(wrapper).toHaveStyleRule('border-bottom', `1px solid ${NEUTRAL.N100}`);
      });

      test('should not set border-bottom with "borderless=true"', () => {
        const wrapper = mount(<CardSegment borderless />);
        expect(wrapper).not.toHaveStyleRule('border-bottom');
      });

    });

    describe('indent', () => {

      test('should indent via padding by default', () => {
        const wrapper = mount(<CardSegment indent={10} />);
        expect(wrapper).toHaveStyleRule('margin', '0');
        expect(wrapper).toHaveStyleRule('padding', '30px 30px 30px 130px');
      });

      test('should indent via margin with "noBleed=true"', () => {
        const wrapper = mount(<CardSegment indent={10} noBleed />);
        expect(wrapper).toHaveStyleRule('margin', '0 30px 0 130px');
        expect(wrapper).toHaveStyleRule('padding', '30px 0 30px 0');
      });

      test('should respect top/bottom padding with "padding=sm"', () => {
        const wrapper = mount(<CardSegment indent={10} padding="sm" />);
        expect(wrapper).toHaveStyleRule('margin', '0');
        expect(wrapper).toHaveStyleRule('padding', '10px 30px 10px 130px');
      });

      test('should respect top/bottom padding with "padding=md"', () => {
        const wrapper = mount(<CardSegment indent={10} padding="md" />);
        expect(wrapper).toHaveStyleRule('margin', '0');
        expect(wrapper).toHaveStyleRule('padding', '20px 30px 20px 130px');
      });

      test('should ignore negative values', () => {
        const wrapper = mount(<CardSegment indent={-10} />);
        expect(wrapper).toHaveStyleRule('margin', '0');
        expect(wrapper).toHaveStyleRule('padding', '30px 30px 30px 30px');
      });

    });

    describe('noBleed', () => {

      test('should use only padding with "noBleed=false"', () => {
        const wrapper = mount(<CardSegment />);
        expect(wrapper).toHaveStyleRule('margin', '0');
        expect(wrapper).toHaveStyleRule('padding', '30px 30px 30px 30px');
      });

      test('should use left/right margin instead of padding with "noBleed=true"', () => {
        const wrapper = mount(<CardSegment noBleed />);
        expect(wrapper).toHaveStyleRule('margin', '0 30px 0 30px');
        expect(wrapper).toHaveStyleRule('padding', '30px 0 30px 0');
      });

    });

    describe('onClick', () => {

      test('should have "cursor: inherit" by default for hover', () => {
        const wrapper = mount(<CardSegment />);
        expect(wrapper).toHaveStyleRule('cursor', 'inherit', { modifier: ':hover' });
      });

      test('should have "cursor: pointer" for hover', () => {
        const wrapper = mount(<CardSegment onClick={() => {}} />);
        expect(wrapper).toHaveStyleRule('cursor', 'pointer', { modifier: ':hover' });
      });

    });

    describe('padding', () => {

      test('should set padding directly', () => {
        const wrapper = mount(<CardSegment padding="10px 20px" />);
        expect(wrapper).toHaveStyleRule('padding', '10px 20px');
      });

      test('should override indent', () => {
        const wrapper = mount(<CardSegment indent={10} padding="50px" />);
        expect(wrapper).toHaveStyleRule('padding', '50px');
      });

      test('should respect margin with "noBleed=true"', () => {
        const wrapper = mount(<CardSegment noBleed padding="50px" />);
        expect(wrapper).toHaveStyleRule('margin', '0 30px 0 30px');
        expect(wrapper).toHaveStyleRule('padding', '50px');
      });

    });

  });

});
