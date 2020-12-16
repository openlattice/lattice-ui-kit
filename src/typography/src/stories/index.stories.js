import React from 'react';

import Typography from '../components/Typography';
import { Card, CardSegment } from '../../../layout';

export default {
  title: 'Typography',
};

export const Html = () => (
  <Card>
    <CardSegment>
      <a href="https://material-ui.com/api/typography/">https://material-ui.com/api/typography/</a>
      <br />
      <Typography variant="h1" gutterBottom>
        h1. h1
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. h2
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. h3
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. h4
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. h5
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. h6
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        h6. subtitle1
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        h6. subtitle2
      </Typography>
      <Typography variant="body1" gutterBottom>
        p. body1
      </Typography>
      <Typography variant="body2" gutterBottom>
        p. body2
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        span. button
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        span. overline
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        span. caption
      </Typography>
    </CardSegment>
  </Card>
);

Html.story = {
  name: 'html',
};
