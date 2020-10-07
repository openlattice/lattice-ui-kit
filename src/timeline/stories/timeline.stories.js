import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  Card,
  CardSegment,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  Typography,
} from '../..';

storiesOf('Timeline', module)
  .add('basic', () => (
    <div>
      <Typography variant="h1" gutterBottom>Timeline</Typography>
      <Card>
        <CardSegment>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardSegment>
      </Card>
    </div>
  ));
