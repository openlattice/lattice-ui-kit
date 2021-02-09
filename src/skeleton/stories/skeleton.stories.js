import styled from 'styled-components';
import { Skeleton } from '@material-ui/lab';

import { Card, CardHeader, CardSegment } from '../../layout';

const Row = styled.div`
  align-items: ${(props) => (props.align ? props.align : null)};
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  > *:not(:first-child) {
    flex: 1;
    margin-left: 10px;
  }
`;

export default {
  title: 'Skeleton',

  decorators: [
    (storyFn) => (
      <div>
        <a href="https://material-ui.com/components/skeleton/#skeleton">
          https://material-ui.com/components/skeleton/#skeleton
        </a>
        <p>This forwards the Skeleton component from Material-Ui.</p>
        {storyFn()}
      </div>
    ),
  ],
};

export const DefaultAnimationPulse = () => (
  <Card>
    <CardHeader padding="sm">
      <Row align="center">
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="text" />
      </Row>
    </CardHeader>
    <CardSegment vertical padding="sm">
      <Row>
        <Skeleton variant="rect" width={210} height={118} />
        <div>
          <Skeleton />
          <Skeleton width="95%" />
          <Skeleton width="97%" />
          <Skeleton width="95%" />
          <Skeleton width="55%" />
        </div>
      </Row>
    </CardSegment>
  </Card>
);

DefaultAnimationPulse.story = {
  name: 'Default animation (pulse)',
};
