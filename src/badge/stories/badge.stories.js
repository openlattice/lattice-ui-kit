import Badge from '..';
import { Card, CardSegment } from '../../layout';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <>
    <h1>Badges</h1>
    <Card>
      <CardSegment vertical={false}>
        <Badge count="5" />
        <Badge mode="primary" count="25" />
        <Badge mode="secondary" count="150" />
        <Badge mode="subtle" count="25" />
      </CardSegment>
      <CardSegment vertical={false}>
        <Badge mode="primary" max="100" count="456" />
        <Badge mode="primary" count="456000000" max="100000" />
      </CardSegment>
    </Card>
  </>
);

Default.story = {
  name: 'default',
};
