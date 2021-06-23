import { MARKDOWN_DEMO } from './constants';

import MarkdownPreview from '../src/components/MarkdownPreview';
import { Card, CardSegment } from '../../layout';

export default {
  title: 'MarkdownPreview',
};

export const Default = () => (
  <Card>
    <CardSegment>
      <MarkdownPreview>
        {MARKDOWN_DEMO}
      </MarkdownPreview>
    </CardSegment>
  </Card>
);

Default.story = {
  name: 'default',
};
