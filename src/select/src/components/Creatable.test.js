import ReactSelectCreatable from 'react-select/creatable';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Creatable, { defaultProps } from './Creatable';
import { OPTIONS } from './constants';

describe('Creatable', () => {

  test('render matches snapshot', () => {
    const tree = mount(<Creatable />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('internal Select should receive preset props', () => {
    const wrapper = mount(<Creatable />);
    const selectProps = wrapper.find(ReactSelectCreatable).props();

    Object.keys(defaultProps).forEach((key) => {
      expect(selectProps[key]).toEqual(defaultProps[key]);
    });
  });

  test('clicking should toggle menu', () => {
    const wrapper = mount(<Creatable />);
    expect(wrapper.find('Menu').exists()).toBeFalsy();
    wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

  test('single > should show controlled value', () => {
    const wrapper = mount(
      <Creatable
          options={OPTIONS}
          value={OPTIONS[0]} />
    );
    const actualValue = wrapper.find('Control').get(0).props.getValue();
    const expectedValue = [OPTIONS[0]];
    expect(actualValue).toEqual(expectedValue);
  });

  test('multi > should show controlled value', () => {
    const wrapper = mount(
      <Creatable
          isMulti
          options={OPTIONS}
          value={[OPTIONS[0], OPTIONS[1]]} />
    );
    const actualValue = wrapper.find('Control').get(0).props.getValue();
    const expectedValue = [
      OPTIONS[0],
      OPTIONS[1]
    ];
    expect(actualValue).toEqual(expectedValue);
  });
});
