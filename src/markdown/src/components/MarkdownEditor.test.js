import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import MarkdownEditor from './MarkdownEditor';

describe('MarkdownEditor', () => {

  test('render matches snapshot', () => {
    const wrapper = shallow(<MarkdownEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
