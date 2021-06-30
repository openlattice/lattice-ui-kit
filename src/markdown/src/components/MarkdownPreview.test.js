import ReactMarkdown from 'react-markdown';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import MarkdownPreview from './MarkdownPreview';
import MarkdownWrapper from './styled/MarkdownWrapper';

describe('MarkdownPreview', () => {

  test('render matches snapshot', () => {
    const wrapper = shallow(<MarkdownPreview />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render MarkdownWrapper', () => {
    const wrapper = shallow(<MarkdownPreview />);

    expect(wrapper.find(MarkdownWrapper)).toHaveLength(1);
  });

  test('should render ReactMarkdown', () => {
    const wrapper = shallow(<MarkdownPreview />);

    expect(wrapper.find(ReactMarkdown)).toHaveLength(1);
  });

});
