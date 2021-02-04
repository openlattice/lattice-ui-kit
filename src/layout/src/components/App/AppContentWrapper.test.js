import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import AppContentInnerWrapper from './styled/AppContentInnerWrapper';
import AppContentOuterWrapper from './styled/AppContentOuterWrapper';
import AppContentWrapper from './AppContentWrapper';

describe('AppContentWrapper', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<AppContentWrapper />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render 2 div elements', () => {
      const wrapper = mount(<AppContentWrapper />);
      expect(wrapper.find('div')).toHaveLength(2);
    });

  });

  describe('props', () => {

    describe('children', () => {

      test('should include all children in the render tree', () => {
        const children = (
          <div id="test-id">
            <h2>
              heading
            </h2>
            <ul className="list">
              <li>
                one
              </li>
            </ul>
            <p>
              this is a paragraph
            </p>
            <button type="button">
              clicky 1
            </button>
          </div>
        );
        const wrapper = shallow(
          <AppContentWrapper>
            { children }
          </AppContentWrapper>
        );
        expect(wrapper.contains(children)).toEqual(true);
      });

    });

    describe('bgColor', () => {

      describe('AppContentOuterWrapper', () => {

        test('should not set a background color by default', () => {
          const wrapper = mount(<AppContentWrapper />);
          expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('background-color', undefined);
        });

        test('should set the background color', () => {
          const wrapper = mount(<AppContentWrapper bgColor="deeppink" />);
          expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('background-color', 'deeppink');
        });

      });

      describe('AppContentInnerWrapper', () => {

        test('should be ignored', () => {
          const wrapper = mount(<AppContentWrapper />);
          expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('background-color', undefined);
        });

      });

    });

  });

  describe('style', () => {

    describe('AppContentOuterWrapper', () => {

      test('should be styled correctly', () => {
        const wrapper = mount(<AppContentWrapper />);
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('flex', '0 0 auto');
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('flex-direction', 'row');
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('justify-content', 'center');
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('max-width', undefined);
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('min-width', undefined);
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('padding', undefined);
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('position', 'relative');
        expect(wrapper.find(AppContentOuterWrapper)).toHaveStyleRule('width', undefined);
      });

    });

    describe('AppContentInnerWrapper', () => {

      test('should be styled correctly', () => {
        const wrapper = mount(<AppContentWrapper />);
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('flex', '1 0 auto');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('flex-direction', 'column');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('justify-content', 'flex-start');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('max-width', '1168px');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('min-width', '0');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('padding', '32px');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('position', 'relative');
        expect(wrapper.find(AppContentInnerWrapper)).toHaveStyleRule('width', '100%');
      });

    });

  });

});
