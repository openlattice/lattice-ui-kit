import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Typography from './Typography';

describe('Typography', () => {

  test('h1 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h1">h1</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('h2 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h2">h2</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('h3 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h3">h3</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('h4 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h4">h4</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('h5 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h5">h5</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('h6 matches snapshot', () => {
    const wrapper = mount(<Typography variant="h6">h6</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('subtitle1 matches snapshot', () => {
    const wrapper = mount(<Typography variant="subtitle1">subtitle1</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('subtitle2 matches snapshot', () => {
    const wrapper = mount(<Typography variant="subtitle2">subtitle2</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('body1 matches snapshot', () => {
    const wrapper = mount(<Typography variant="body1">body1</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('body2 matches snapshot', () => {
    const wrapper = mount(<Typography variant="body2">body2</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('button matches snapshot', () => {
    const wrapper = mount(<Typography variant="button">button</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('overline matches snapshot', () => {
    const wrapper = mount(<Typography variant="overline">overline</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('caption matches snapshot', () => {
    const wrapper = mount(<Typography variant="caption">caption</Typography>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
