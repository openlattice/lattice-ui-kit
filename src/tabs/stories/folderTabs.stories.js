import { useState } from 'react';

import FolderTab from '../src/components/FolderTab';
import FolderTabs from '../src/components/FolderTabs';
import Typography from '../../typography';
import { Card, CardSegment } from '../../layout';

export default {
  title: 'Folder Tabs',
  component: FolderTabs,
};

export const Horizontal = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardSegment>
        <Typography gutterBottom variant="h1">Folder Tabs</Typography>
        <FolderTabs value={value} onChange={handleChange} aria-label="folder example">
          <FolderTab label="Data Sets" />
          <FolderTab label="Trusted Organizations" />
          <FolderTab label="Collaborations" />
        </FolderTabs>
      </CardSegment>
    </Card>
  );
};
