// @flow
import { mount } from 'enzyme';

import { useBoolean } from './index';

type Props = {
  isTrue ? :boolean;
}

const Component = ({ isTrue } :Props) => {
  const [truthiness, setTrue, setFalse] = useBoolean(isTrue);
  return (
    <div>
      <span>{`${truthiness}`}</span>
      <button type="button" id="set-true" onClick={() => setTrue()}>true</button>
      <button type="button" id="set-false" onClick={() => setFalse()}>false</button>
    </div>
  );
};

Component.defaultProps = {
  isTrue: undefined
};

describe('useBoolean', () => {
  test('should set state to false by default', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.find('span').text()).toEqual('false');
  });

  test('should initalize with true', () => {
    const wrapper = mount(<Component isTrue />);
    expect(wrapper.find('span').text()).toEqual('true');
  });

  test('should initalize with false', () => {
    const wrapper = mount(<Component isTrue={false} />);
    expect(wrapper.find('span').text()).toEqual('false');
  });

  test('should listen to prop changes', () => {
    const wrapper = mount(<Component isTrue={false} />);
    expect(wrapper.find('span').text()).toEqual('false');
    wrapper.setProps({ isTrue: true });
    expect(wrapper.find('span').text()).toEqual('true');
    wrapper.setProps({ isTrue: false });
    expect(wrapper.find('span').text()).toEqual('false');
  });

  test('setTrue should change state to true', () => {
    const wrapper = mount(<Component isTrue={false} />);

    expect(wrapper.find('span').text()).toEqual('false');
    wrapper.find('#set-true').simulate('click');
    expect(wrapper.find('span').text()).toEqual('true');
  });

  test('setFalse should change state to false', () => {
    const wrapper = mount(<Component isTrue />);

    expect(wrapper.find('span').text()).toEqual('true');
    wrapper.find('#set-false').simulate('click');
    expect(wrapper.find('span').text()).toEqual('false');
  });
});
