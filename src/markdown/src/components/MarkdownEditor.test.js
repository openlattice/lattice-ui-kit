import { mount } from 'enzyme';

import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

import { TextArea } from '../../../text';

describe('MarkdownEditor', () => {

  test('default view is edit', () => {
    const wrapper = mount(<MarkdownEditor />);

    expect(wrapper.find(TextArea)).toHaveLength(1);
  });

  test('preview view renders MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor view="preview" />);

    expect(wrapper.find(MarkdownPreview)).toHaveLength(1);
  });

  test('clicking preview tab shows MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor />);

    const previewTab = wrapper.find('button').last();
    previewTab.simulate('click');

    wrapper.update();

    expect(wrapper.find(TextArea)).toHaveLength(0);
    expect(wrapper.find(MarkdownPreview)).toHaveLength(1);
  });

  test('clicking edit tab shows MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor view="edit" />);

    const previewTab = wrapper.find('button').first();
    previewTab.simulate('click');

    wrapper.update();

    expect(wrapper.find(TextArea)).toHaveLength(1);
    expect(wrapper.find(MarkdownPreview)).toHaveLength(0);
  });

  test('should call onChange if provided', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(<MarkdownEditor onChange={mockOnChange} />);

    wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

});
