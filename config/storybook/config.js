import React from 'react';
import styled from 'styled-components';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import storybookTheme from './storybookTheme';
import { NEUTRALS } from '../../src/colors';

const StoryOuterWrapper = styled.div`
  background-color: ${NEUTRALS[7]};
  color: ${NEUTRALS[0]};
  display: flex;
  font-family: 'Open Sans', Arial, sans-serif;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1.5;
  overflow: scroll;
  position: relative;
  width: 100%;
  -webkit-font-smoothing: antialiased;
`;

const StoryInnerWrapper = styled.div`
  max-width: 1200px;
  padding: 30px;
  position: relative;
  width: 100%;

  > div {
    height: 100%;
  }
`;

addDecorator(withInfo);

addParameters({
  options: {
    theme: storybookTheme
  },
});

addDecorator((Story) => (
  <StoryOuterWrapper>
    <StoryInnerWrapper>
      <Story />
    </StoryInnerWrapper>
  </StoryOuterWrapper>
));

const req = require.context('../../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
