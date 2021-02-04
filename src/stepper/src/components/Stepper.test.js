import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Step from './Step';
import Stepper from './Stepper';
import {
  StepDivider,
  StepperWrapper,
} from './styled';

describe('Stepper', () => {
  test('should match snapshot', () => {
    const wrapper = mount(
      <Stepper>
        <Step>Step 1</Step>
        <Step>Step 2</Step>
        <Step>Step 3</Step>
      </Stepper>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('orientation', () => {

    test('`vertical = false` should apply vertical styles', () => {
      const wrapper = mount(<Stepper />);
      const stepperWrapper = wrapper.find(StepperWrapper);
      expect(stepperWrapper.prop('vertical')).toBe(false);
      expect(stepperWrapper).toHaveStyleRule('align-items', 'center');
    });

    test('`vertical = true` should apply vertical styles', () => {
      const wrapper = mount(<Stepper vertical />);
      const stepperWrapper = wrapper.find(StepperWrapper);
      expect(stepperWrapper.prop('vertical')).toBe(true);
      expect(stepperWrapper).toHaveStyleRule('align-items', 'flex-start');
      expect(stepperWrapper).toHaveStyleRule('flex-direction', 'column');
      expect(stepperWrapper).toHaveStyleRule('justify-content', 'start');
    });
  });

  describe('children', () => {
    test('should add dividers between each child', () => {
      const wrapper = shallow(
        <Stepper>
          <div />
          <div />
          <div />
        </Stepper>
      );

      const children = wrapper.children();
      expect(children).toHaveLength(5);
      expect(wrapper.childAt(1).find(StepDivider)).toHaveLength(1);
      expect(wrapper.childAt(3).find(StepDivider)).toHaveLength(1);
    });

    test('pass orientation to children', () => {
      const wrapper = mount(
        <Stepper vertical>
          <Step />
          <Step />
          <Step />
        </Stepper>
      );
      const children = wrapper.children();
      children.forEach((child) => {
        expect(child.prop('vertical')).toBe(true);
      });

    });

    test('each step gets an index', () => {
      const wrapper = mount(
        <Stepper>
          <Step />
          <Step />
          <Step />
        </Stepper>
      );

      const steps = wrapper.find(Step);
      steps.forEach((step, index) => {
        expect(step.prop('index')).toBe(index + 1);
      });
    });

    test('`sequential` should influence state by `activeStep`', () => {
      const wrapper = shallow(
        <Stepper sequential activeStep={0}>
          <Step />
          <Step />
          <Step />
        </Stepper>
      );

      const steps = wrapper.find(Step);
      // Step 1
      expect(steps.at(0).prop('active')).toBe(true);
      expect(steps.at(0).prop('complete')).toBe(false);
      expect(steps.at(0).prop('disabled')).toBe(false);
      // Step 2
      expect(steps.at(1).prop('active')).toBe(false);
      expect(steps.at(1).prop('complete')).toBe(false);
      expect(steps.at(1).prop('disabled')).toBe(true);
      // Step 3
      expect(steps.at(2).prop('active')).toBe(false);
      expect(steps.at(2).prop('complete')).toBe(false);
      expect(steps.at(2).prop('disabled')).toBe(true);

      wrapper.setProps({ activeStep: 1 });

      const newSteps = wrapper.find(Step);

      // Step 1
      expect(newSteps.at(0).prop('active')).toBe(false);
      expect(newSteps.at(0).prop('complete')).toBe(true);
      expect(newSteps.at(0).prop('disabled')).toBe(false);
      // Step 2
      expect(newSteps.at(1).prop('active')).toBe(true);
      expect(newSteps.at(1).prop('complete')).toBe(false);
      expect(newSteps.at(1).prop('disabled')).toBe(false);
      // Step 3
      expect(newSteps.at(2).prop('active')).toBe(false);
      expect(newSteps.at(2).prop('complete')).toBe(false);
      expect(newSteps.at(2).prop('disabled')).toBe(true);

    });

    test('`sequential = false` should not influence state by `activeStep`', () => {
      const wrapper = shallow(
        <Stepper activeStep={0}>
          <Step />
          <Step />
          <Step />
        </Stepper>
      );

      const steps = wrapper.find(Step);
      // Step 1
      expect(steps.at(0).prop('active')).toBe(true);
      expect(steps.at(0).prop('complete')).toBe(false);
      expect(steps.at(0).prop('disabled')).toBe(false);
      // Step 2
      expect(steps.at(1).prop('active')).toBe(false);
      expect(steps.at(1).prop('complete')).toBe(false);
      expect(steps.at(1).prop('disabled')).toBe(false);
      // Step 3
      expect(steps.at(2).prop('active')).toBe(false);
      expect(steps.at(2).prop('complete')).toBe(false);
      expect(steps.at(2).prop('disabled')).toBe(false);

      wrapper.setProps({ activeStep: 1 });

      const newSteps = wrapper.find(Step);

      // Step 1
      expect(newSteps.at(0).prop('active')).toBe(false);
      expect(newSteps.at(0).prop('complete')).toBe(false);
      expect(newSteps.at(0).prop('disabled')).toBe(false);
      // Step 2
      expect(newSteps.at(1).prop('active')).toBe(true);
      expect(newSteps.at(1).prop('complete')).toBe(false);
      expect(newSteps.at(1).prop('disabled')).toBe(false);
      // Step 3
      expect(newSteps.at(2).prop('active')).toBe(false);
      expect(newSteps.at(2).prop('complete')).toBe(false);
      expect(newSteps.at(2).prop('disabled')).toBe(false);

    });

    test('compose props passed from children', () => {
      const wrapper = mount(
        <Stepper>
          <Step foo="bar" complete />
        </Stepper>
      );

      const step = wrapper.find(Step);
      expect(step.prop('foo')).toBe('bar');
      expect(step.prop('complete')).toBe(true);
    });
  });
});
