import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import MarkdownEditor from './MarkdownEditor';

describe('MarkdownEditor', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<MarkdownEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
