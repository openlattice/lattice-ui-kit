import { useState } from 'react';

import { MARKDOWN_DEMO } from './constants';

import MarkdownEditor from '../src/components/MarkdownEditor';
import { Card, CardSegment } from '../../layout';

export default {
  title: 'MarkdownEditor',
};

export const Default = () => {
  const [text, setText] = useState(MARKDOWN_DEMO);

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  return (
    <Card>
      <CardSegment>
        <MarkdownEditor value={text} onChange={handleChange} />
      </CardSegment>
    </Card>
  );
};

Default.story = {
  name: 'default',
};
