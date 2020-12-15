import React, { useState } from 'react';

import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addDecorator } from '@storybook/react';

import LatticeLuxonUtils from '../../src/datetime/src/components/utils/LatticeLuxonUtils';
import { Button } from '../../src/button';
import { NEUTRAL } from '../../src/colors';
import { darkTheme, lightTheme } from '../../src/theme';

const StoryOuterWrapper = styled.div`
  background-color: white;
  color: ${NEUTRAL.N900};
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

addDecorator((StoryFn) => {
  const [isDark, setTheme] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setTheme(!isDark);
  };

  return (
    <StoryOuterWrapper>
      <StoryInnerWrapper>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <StylesProvider injectFirst>
              <Button mode="primary" onClick={toggleTheme}>{`Dark Theme: ${isDark}`}</Button>
              <StoryFn isDark={isDark} />
            </StylesProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StoryInnerWrapper>
    </StoryOuterWrapper>
  );
});
