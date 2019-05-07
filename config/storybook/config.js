import React from 'react';
import styled from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';

import storybookTheme from './storybookTheme';
import { NEUTRALS } from '../../src/colors';

const StoryWrapper = styled.div`
  color: ${NEUTRALS[0]};
  font-family: "Open Sans", sans-serif;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1.35;
`;

addDecorator(storyFn => (
  <StoryWrapper>
    {storyFn()}
  </StoryWrapper>
));

addParameters({
  options: {
    theme: storybookTheme
  },
});

const req = require.context('../../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
