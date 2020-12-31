import React from 'react';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import notes from './notes.md';

const StyledSpinner = styled(Spinner)`
  font-size: 50px;
`;

export default {
  title: 'Spinner',

  parameters: {
    info: {
      text: notes,
    },
  },
};

export const Default = () => <Spinner />;

Default.story = {
  name: 'default',
};

export const Styled = () => <StyledSpinner topColor="rebeccapurple" bottomColor="orchid" />;

Styled.story = {
  name: 'styled',
};