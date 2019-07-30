import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import withProps from './withProps';

const WrappedComponent = () => <div>test</div>;

const testProps = {
  open: 'lattice',
  foo: 'bar'
};

describe('withProps', () => {
  test('render matches snapshot', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = mount(<ComponentWithProps />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('returns LatticeWrapper', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = mount(<ComponentWithProps />);
    expect(
      wrapper.find('LatticeWrapper').exists()
    ).toBeTruthy();
  });

  test('attaches props to WrappedComponent', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps />);
    expect(
      wrapper.props()
    ).toEqual(testProps);
  });

  test('includes outer props', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps outer="included" />);
    expect(
      wrapper.prop('outer')
    ).toEqual('included');
  });

  test('outer props override hocProps', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps open="source" />);
    expect(
      wrapper.prop('open')
    ).toEqual('source');
  });
});
