import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import PaginationToolbar from './PaginationToolbar';

import { Select } from '../../../select';

describe('PaginationToolbar', () => {

  describe('snapshots', () => {
    test('should match snaphot', () => {
      const wrapper = mount(
        <PaginationToolbar
            page={1}
            count={0} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('props', () => {
    let buttons;
    let mockOnPageChange;
    let wrapper;
    beforeEach(() => {
      mockOnPageChange = jest.fn();
      wrapper = mount(
        <PaginationToolbar
            count={15}
            onPageChange={mockOnPageChange}
            page={2}
            rowsPerPageOptions={[5, 10]} />
      );
      buttons = wrapper.find('button');
    });

    describe('change page', () => {
      test('should invoke setPage and onPageChange when back button is clicked', () => {
        const prevButton = buttons.first();

        prevButton.props().onClick();

        expect(mockOnPageChange.mock.calls[0][0]).toEqual({
          page: 1,
          start: 0,
          rowsPerPage: 5
        });
      });

      test('should invoke setPage and onPageChange when next button is clicked', () => {
        const nextButton = buttons.last();

        nextButton.props().onClick();

        expect(mockOnPageChange.mock.calls[0][0]).toEqual({
          page: 3,
          start: 10,
          rowsPerPage: 5
        });
      });
    });

    describe('change rowsPerPage', () => {

      test('should invoke onPageChange when Select onChange', () => {
        const select = wrapper.find(Select).first();

        select.props().onChange(20);

        expect(mockOnPageChange.mock.calls[0][0]).toEqual({
          page: 1,
          start: 0,
          rowsPerPage: 20
        });
      });
    });
  });

  describe('render', () => {

    describe('rowsPerPageOptions', () => {

      test('should not show Select with only one value in rowsPerPageOptions', () => {
        const wrapper = shallow(
          <PaginationToolbar
              page={1}
              count={0}
              rowsPerPageOptions={[5, 10]} />
        );
        expect(wrapper.find(Select)).toHaveLength(1);
        wrapper.setProps({ rowsPerPageOptions: [5] });
        expect(wrapper.find(Select)).toHaveLength(0);
      });
    });

    describe('page buttons', () => {

      test('should disable page buttons when at their upper and lower page bounds', () => {
        const wrapper = mount(
          <PaginationToolbar
              page={1}
              count={7}
              rowsPerPage={5} />
        );
        const buttons = wrapper.find('button');
        const prevButton = buttons.first();
        const nextButton = buttons.last();
        expect(prevButton.props().disabled).toEqual(true);
        expect(nextButton.props().disabled).toEqual(false);

        wrapper.setProps({ page: 2 });
        expect(wrapper.find('button').last().props().disabled).toEqual(true);
      });
    });
  });
});
