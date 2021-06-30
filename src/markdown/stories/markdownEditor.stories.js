import { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { MARKDOWN_DEMO } from './constants';

import MarkdownEditor from '../src/components/MarkdownEditor';
import { Card, CardSegment } from '../../layout';

export default {
  title: 'MarkdownEditor',
};

export const Uncontrolled = () => (
  <Card>
    <CardSegment>
      <MarkdownEditor defaultValue={MARKDOWN_DEMO} />
    </CardSegment>
  </Card>
);

Uncontrolled.story = {
  name: 'Uncontrolled',
};

export const Controlled = () => {
  const [text, setText] = useState(MARKDOWN_DEMO);
  const handleChange = (e) => {
    setText(e.target.value);
    action('onChange')(e);
  };

  return (
    <Card>
      <CardSegment>
        <MarkdownEditor value={text} onChange={handleChange} />
      </CardSegment>
    </Card>
  );
};

Controlled.story = {
  name: 'Controlled',
};

export const DefaultPreview = () => (
  <Card>
    <CardSegment>
      <MarkdownEditor view="preview" defaultValue={MARKDOWN_DEMO} />
    </CardSegment>
  </Card>
);

DefaultPreview.story = {
  name: 'Default View: Preview',
};
