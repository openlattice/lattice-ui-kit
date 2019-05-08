import React from 'react';
import { storiesOf } from '@storybook/react';

import Search from '../src/components/Search';
import { Card, CardSegment } from '../../../layout';

storiesOf('Search', module)
  .add('Search fields', () => (
    <>
      <Card>
        <CardSegment>
          <Search />
        </CardSegment>
      </Card>
    </>
  ));
