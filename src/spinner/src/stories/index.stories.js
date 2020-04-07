import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Spinner from '../components/Spinner';

const StyledSpinner = styled(Spinner)`
  font-size: 50px;
`;

storiesOf('Spinner', module)
  .add('default', () => <Spinner />)
  .add('styled', () => <StyledSpinner color="#8045ff" size={100} />);
