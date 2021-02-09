import { Button, Card, CardContent } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export default {
  title: 'Pagination',
};

export const Default = () => (
  <Card>
    <CardContent>
      <Button color="primary" variant="contained" disableElevation>
        Button
      </Button>
      <Pagination count={10} shape="rounded" />
    </CardContent>
  </Card>
);

Default.story = {
  name: 'default',
};
