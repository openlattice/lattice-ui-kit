import React from 'react';

import { Button, Card, CardContent } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { storiesOf } from '@storybook/react';

storiesOf('Pagination', module)
  .add('default', () => (
    <Card>
      <CardContent>
        <Button color="primary" variant="contained" disableElevation>Button</Button>
        <Pagination count={10} shape="rounded" />
      </CardContent>
    </Card>
  ));
