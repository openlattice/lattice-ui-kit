import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faDiceD20 } from '@fortawesome/free-solid-svg-icons';

import IconSplash from '../src/components/IconSplash';
import { Card, CardSegment } from '../../../layout';


storiesOf('Icon Splash', module)
  .add('FontAwesome IconDefinition', () => (
    <Card>
      <CardSegment>
        <IconSplash icon={faFingerprint} caption="Keep your finger on the sensor a little longer" size="3x" />
      </CardSegment>
    </Card>
  ))
  .add('icon render prop', () => (
    <Card>
      <CardSegment>
        <IconSplash
            icon={(size) => (
              <FontAwesomeIcon icon={faDiceD20} size={size} fixedWidth spin />
            )}
            caption="Rolling the dice..." />
      </CardSegment>
    </Card>
  ));
