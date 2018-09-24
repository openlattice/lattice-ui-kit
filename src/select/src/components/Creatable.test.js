import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Creatable, { props } from './Creatable';
import { OPTIONS } from './constants';

describe('Creatable', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<Creatable />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('internal Creatable should have selectProps', () => {
    const wrapper = mount(<Creatable />);
    const creatableProps = wrapper.find('Creatable').props();
    expect(creatableProps.selectProps).toEqual(props.selectProps);
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
