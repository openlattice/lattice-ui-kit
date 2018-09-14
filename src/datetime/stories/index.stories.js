import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DatePicker, TimePicker } from '../index';

const StyledDiv = styled.div`
  width: 200px;
`;

storiesOf('Date and Time', module)
  .add('Date', () => (
    <div>
      <h1>
        Date Picker
      </h1>
      <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
        Atlaskit Documentation
      </a>
      <StyledDiv>
        <DatePicker
            onChange={action('Date changed')} />
      </StyledDiv>
    </div>
  ))
  .add('Time', () => (
    <div>
      <h1>
        Time Picker
      </h1>
      <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
        Atlaskit Documentation
      </a>
      <StyledDiv>
        <TimePicker
            onChange={action('Time changed')} />
      </StyledDiv>
    </div>
  ));
