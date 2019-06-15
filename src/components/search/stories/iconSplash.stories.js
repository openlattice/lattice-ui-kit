import React from 'react';
import { storiesOf } from '@storybook/react';
import { faFingerprint } from '@fortawesome/pro-light-svg-icons';

import IconSplash from '../src/components/IconSplash';
import { Card, CardSegment, CardStack } from '../../../layout';


storiesOf('Icon Splash', module)
  .add('custom icon', () => (
    <CardStack>
      <Card>
        <CardSegment>
          <IconSplash icon={faFingerprint} caption="Keep your finger on the sensor a little longer" size="3x" />
        </CardSegment>
      </Card>
    </CardStack>
  ));
