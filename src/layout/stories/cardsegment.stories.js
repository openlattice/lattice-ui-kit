import { Button } from '../../button';
import { PURPLE } from '../../colors';
import {
  Card,
  CardSegment,
  CardStack
} from '../index';

export default {
  title: 'CardSegment',
  component: CardSegment
};

export const Default = () => (
  <CardStack>
    <Card>
      <CardSegment>Segment 1</CardSegment>
      <CardSegment>Segment 2</CardSegment>
      <CardSegment>Segment 3</CardSegment>
    </Card>

    <Card>
      <CardSegment noBleed>Segment 1</CardSegment>
      <CardSegment noBleed>Segment 2</CardSegment>
      <CardSegment noBleed>Segment 3</CardSegment>
    </Card>

    <Card>
      <CardSegment indent={4}>Indented Segment 1</CardSegment>
      <CardSegment indent={12}>Indented Segment 2</CardSegment>
      <CardSegment indent={24}>Indented Segment 3</CardSegment>
    </Card>

    <Card>
      <CardSegment indent={4} noBleed>
        Indented Segment 1
      </CardSegment>
      <CardSegment indent={12} noBleed>
        Indented Segment 2
      </CardSegment>
      <CardSegment indent={24} noBleed>
        Indented Segment 3
      </CardSegment>
    </Card>

    <Card>
      <CardSegment>
        <Button mode="primary">default</Button>
        <Button mode="secondary">flex</Button>
        <Button>column</Button>
      </CardSegment>
    </Card>

    <Card>
      <CardSegment vertical={false}>
        <Button mode="primary">vertical=false</Button>
        <Button mode="secondary">card</Button>
        <Button>segment</Button>
      </CardSegment>
    </Card>

    <Card>
      <CardSegment bgColor={PURPLE.P300}>bgColor</CardSegment>
      <CardSegment bgColor={PURPLE.P300}>bgColor</CardSegment>
      <CardSegment bgColor={PURPLE.P200}>bgColor</CardSegment>
    </Card>
  </CardStack>
);
