import { mount } from 'enzyme';

import MarkdownPreview from './MarkdownPreview';
import MarkdownEditor, { StyledTabPanel } from './MarkdownEditor';

import { TextArea } from '../../../text';

describe('MarkdownEditor', () => {

  test('default view is edit', () => {
    const wrapper = mount(<MarkdownEditor />);

    expect(wrapper.find(StyledTabPanel).first()).toHaveStyleRule('display', 'block');
    expect(wrapper.find(StyledTabPanel).last()).toHaveStyleRule('display', 'none');
  });

  test('preview view renders MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor view="preview" />);

    expect(wrapper.find(StyledTabPanel).first()).toHaveStyleRule('display', 'none');
    expect(wrapper.find(StyledTabPanel).last()).toHaveStyleRule('display', 'block');
  });

  test('clicking preview tab shows MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor />);

    const previewTab = wrapper.find('button').last();
    previewTab.simulate('click');

    wrapper.update();

    expect(wrapper.find(StyledTabPanel).first()).toHaveStyleRule('display', 'none');
    expect(wrapper.find(StyledTabPanel).last()).toHaveStyleRule('display', 'block');
  });

  test('clicking edit tab shows MarkdownPreview', () => {
    const wrapper = mount(<MarkdownEditor view="preview" />);

    const previewTab = wrapper.find('button').first();
    previewTab.simulate('click');

    wrapper.update();

    expect(wrapper.find(StyledTabPanel).first()).toHaveStyleRule('display', 'block');
    expect(wrapper.find(StyledTabPanel).last()).toHaveStyleRule('display', 'none');
  });

  test('clicking edit tab focuses textarea', () => {

    const testContainer = document.createElement('div');
    document.body.appendChild(testContainer);

    const wrapper = mount(<MarkdownEditor view="preview" />, {
      attachTo: testContainer
    });

    expect(wrapper.find('textarea').getDOMNode()).not.toEqual(document.activeElement);

    const previewTab = wrapper.find('button').first();
    previewTab.simulate('click');
    wrapper.update();

    expect(wrapper.find('textarea').getDOMNode()).toEqual(document.activeElement);
  });

  test('should call onChange if provided', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(<MarkdownEditor onChange={mockOnChange} />);

    wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

});
