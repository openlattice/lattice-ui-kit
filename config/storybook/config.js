import React, { useState } from 'react';

import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

import LatticeLuxonUtils from '../../src/datetime/src/components/utils/LatticeLuxonUtils';
import { Button } from '../../src/button';
import { NEUTRALS } from '../../src/colors';
import { darkLatticeMaterialTheme, latticeMaterialTheme } from '../../src/theme';

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

addDecorator((StoryFn) => {
  const [isDark, setTheme] = useState(false);
  const theme = isDark ? darkLatticeMaterialTheme : latticeMaterialTheme;

  const toggleTheme = () => {
    setTheme(!isDark);
  };

  return (
    <StoryOuterWrapper>
      <StoryInnerWrapper>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <Button mode="primary" onClick={toggleTheme}>{`Dark Theme: ${isDark}`}</Button>
            <StoryFn isDark={isDark} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StoryInnerWrapper>
    </StoryOuterWrapper>
  );
});

const req = require.context('../../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
