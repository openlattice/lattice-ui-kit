import styled from 'styled-components';

import notes from './notes.md';

import Spinner from '../components/Spinner';

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
