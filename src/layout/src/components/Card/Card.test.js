import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {

  describe('snapshots', () => {

    test('Without Children', () => {
      const wrapper = mount(<Card />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('With child divs', () => {
      const wrapper = mount(
        <Card>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Card>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    test('should render div', () => {
      const wrapper = mount(<Card />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

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
        <Card>
          { children }
        </Card>
      );
      expect(wrapper.contains(children)).toEqual(true);
    });

  });

});
