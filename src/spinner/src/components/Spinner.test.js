import styled from 'styled-components';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Rotate from './styled/Rotate';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('styles', () => {

    test('should set align-self to "center" by default', () => {
      const wrapper = mount(<Spinner />);
      expect(wrapper.find(Rotate)).toHaveStyleRule('align-self', 'center');
    });

    test('should set align-self to "flex-start" if centered is false', () => {
      const wrapper = mount(<Spinner centered={false} />);
      expect(wrapper.find(Rotate)).toHaveStyleRule('align-self', 'flex-start');
    });

    test('should pass bottomColor prop to spinner circle', () => {
      const newColor = 'rebeccapurple';
      const wrapper = shallow(<Spinner bottomColor={newColor} />);
      expect(wrapper.find('FontAwesomeIcon#spinner-circle').props().color).toEqual(newColor);
    });

    test('should pass topColor prop spinner third', () => {
      const newColor = 'rebeccapurple';
      const wrapper = shallow(<Spinner topColor={newColor} />);
      expect(wrapper.find('FontAwesomeIcon#spinner-third').props().color).toEqual(newColor);
    });

    test('should set duration of Rotate animation to 0.75s by default', () => {
      const defaultDuration = '0.75s';
      const wrapper = mount(<Spinner />);
      expect(wrapper.find(Rotate).props().duration).toEqual(undefined);
      expect(wrapper.find(Rotate)).toHaveStyleRule('animation', `fa-spin ${defaultDuration} infinite linear`);
    });

    test('should pass duration prop to Rotate', () => {
      const duration = '2s';
      const wrapper = mount(<Spinner duration={duration} />);
      expect(wrapper.find(Rotate).props().duration).toEqual(duration);
      expect(wrapper.find(Rotate)).toHaveStyleRule('animation', `fa-spin ${duration} infinite linear`);
    });

    test('should adjust fa-{size} className', () => {
      const size = '2x';
      const wrapper = shallow(<Spinner size={size} />);
      expect(wrapper.find(`.fa-${size}`)).toHaveLength(1);
    });

    test('should allow styled classNames', () => {
      const StyledSpinner = styled(Spinner)`
        font-size: 20px;
      `;

      const wrapper = mount(<StyledSpinner />);
      expect(wrapper.find(Rotate)).toHaveStyleRule('font-size', '20px');
    });

  });

});
