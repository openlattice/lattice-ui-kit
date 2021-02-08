import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { faSort, faSortUp, faSortDown } from '@fortawesome/pro-duotone-svg-icons';

import HeadCell from './HeadCell';
import { Cell } from '../..';

describe('HeadCell', () => {

  // shallow render to avoid invalid DOM error
  describe('props', () => {

    describe('onClick', () => {
      test('invoke onClick', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<HeadCell onClick={mockOnClick} />);

        expect(toJson(wrapper)).toMatchSnapshot();

        expect(mockOnClick).toHaveBeenCalledTimes(0);
        wrapper.find('Cell').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('sortable', () => {
      test('should render FontAwesomeIcon if true', () => {
        const wrapper = shallow(<HeadCell sortable />);

        expect(wrapper.find('FontAwesomeIcon')).toHaveLength(1);
      });

      test('should not render FontAwesomeIcon if false', () => {
        const wrapper = shallow(<HeadCell />);

        expect(wrapper.find('FontAwesomeIcon')).toHaveLength(0);
      });
    });

    describe('order', () => {
      test('should render faSortUp if sortable and order="asc"', () => {
        const wrapper = shallow(<HeadCell sortable order="asc" />);

        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('FontAwesomeIcon').prop('icon')).toEqual(faSortUp);
      });

      test('should render faSortDown if sortable and order="desc"', () => {
        const wrapper = shallow(<HeadCell sortable order="desc" />);

        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('FontAwesomeIcon').prop('icon')).toEqual(faSortDown);
      });

      test('should render faSort if sortable but without order', () => {
        const wrapper = shallow(<HeadCell sortable />);

        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('FontAwesomeIcon').prop('icon')).toEqual(faSort);
      });
    });
  });

  describe('render', () => {
    test('should render as th', () => {
      const wrapper = shallow(<HeadCell />);

      expect(wrapper.find(Cell).prop('as')).toEqual('th');
    });

    test('should render children', () => {
      const child = <div>child</div>;
      const wrapper = shallow(<HeadCell>{child}</HeadCell>);

      expect(wrapper.contains(child)).toEqual(true);
    });
  });
});
