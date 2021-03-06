import { forwardRef } from 'react';

import styled from 'styled-components';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tooltip from '..';
import { Card, CardSegment } from '../../layout';

const MarginWrapper = styled.span`
  margin-left: 5px;
`;

const InfoIcon = forwardRef((props, ref) => (
  // https://material-ui.com/components/tooltips/#custom-child-element
  // eslint-disable-next-line react/jsx-props-no-spreading
  <span {...props} ref={ref}>
    <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
  </span>
));

export default {
  title: 'Tooltip',

  decorators: [
    (storyFn) => (
      <div>
        <a href="https://material-ui.com/components/tooltips/#tooltip">
          https://material-ui.com/components/tooltips/#tooltip
        </a>
        <p>This forwards the Tooltip component from Material-Ui.</p>
        <p>
          <strong>Children must be able to accept a ref.</strong>
        </p>
        {storyFn()}
      </div>
    ),
  ],
};

export const Icon = () => (
  <Card>
    <CardSegment padding="sm" vertical={false}>
      <span>Hover for information</span>
      <MarginWrapper>
        <Tooltip arrow placement="top" title="Information">
          <InfoIcon />
        </Tooltip>
      </MarginWrapper>
    </CardSegment>
  </Card>
);
