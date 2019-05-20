import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Spinner from '../components/Spinner';
import notes from './notes.md';

const StyledSpinner = styled(Spinner)`
  font-size: 50px;
`;

storiesOf('Spinner', module)
  .addParameters({
    info: {
      text: notes
    }
  })
  .add('default', () => <Spinner />)
  .add('styled', () => <StyledSpinner topColor="rebeccapurple" bottomColor="orchid" />);
