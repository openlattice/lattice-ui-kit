import React from 'react';

import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

import olTheme from '../../src/theme';
import { NEUTRALS } from '../../src/colors';

const StoryOuterWrapper = styled.div`
  background-color: ${NEUTRALS[7]};
  color: ${NEUTRALS[0]};
  display: flex;
  font-family: 'Inter', Arial, sans-serif;
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

addDecorator((Story) => (
  <StoryOuterWrapper>
    <StoryInnerWrapper>
      <ThemeProvider theme={olTheme}>
        <Story />
      </ThemeProvider>
    </StoryInnerWrapper>
  </StoryOuterWrapper>
));

const req = require.context('../../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
