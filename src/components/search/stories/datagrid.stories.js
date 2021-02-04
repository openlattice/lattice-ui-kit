import DataGrid from '../src/components/DataGrid';
import { Card, CardSegment } from '../../../layout';
import { mockResultLabels, mockSearchResultsForPeople } from '../src/components/constants';

export default {
  title: 'DataGrid',
};

export const Default = () => (
  <Card>
    <CardSegment>
      <DataGrid data={mockSearchResultsForPeople.first()} labelMap={mockResultLabels} />
    </CardSegment>
  </Card>
);

Default.story = {
  name: 'default',
};

export const Truncate = () => (
  <Card>
    <CardSegment>
      <DataGrid data={mockSearchResultsForPeople.first()} labelMap={mockResultLabels} truncate />
    </CardSegment>
  </Card>
);

Truncate.story = {
  name: 'truncate',
};

export const Columns = () => (
  <Card>
    <CardSegment>
      <DataGrid
          data={mockSearchResultsForPeople.first()}
          columns={3}
          labelMap={mockResultLabels}
          truncate />
    </CardSegment>
  </Card>
);

Columns.story = {
  name: 'columns',
};
