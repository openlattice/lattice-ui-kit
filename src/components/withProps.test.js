import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withProps from './withProps';

class WrappedComponent extends Component {
  render() {
    return (
      <div>test</div>
    );
  }
}

const testProps = {
  open: 'lattice',
  data: 'loom'
};

describe('withProps', () => {
  it('render matches snapshot', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('returns LatticeWrapper', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = mount(<ComponentWithProps />);
    expect(
      wrapper.find('LatticeWrapper').exists()
    ).toBeTruthy();
  });

  it('attaches props to WrappedComponent', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps />);
    expect(
      wrapper.props()
    ).toEqual(testProps);
  });

  it('includes outer props', () => {
    const ComponentWithProps = withProps(WrappedComponent, testProps);
    const wrapper = shallow(<ComponentWithProps outer="included" />);
    expect(
      wrapper.prop('outer')
    ).toEqual('included');
  });
});
