import React from 'react';

import styled from 'styled-components';
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

const CustomContent = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 16px;
`;

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
  ))
  .add('custom content', () => (
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
              <TimelineContent>
                <CustomContent>
                  <Typography variant="subtitle1" color="textSecondary">01/01/2020</Typography>
                  <Typography variant="subtitle1">Eat</Typography>
                </CustomContent>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <CustomContent>
                  <Typography variant="subtitle1" color="textSecondary">01/01/2020</Typography>
                  <Typography variant="subtitle1">Code</Typography>
                </CustomContent>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <CustomContent>
                  <Typography variant="subtitle1" color="textSecondary">01/01/2020</Typography>
                  <div>
                    <Typography variant="subtitle1">Sleep</Typography>
                    <Typography variant="caption" color="textSecondary">Optional</Typography>
                  </div>
                </CustomContent>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardSegment>
      </Card>
    </div>
  ));
