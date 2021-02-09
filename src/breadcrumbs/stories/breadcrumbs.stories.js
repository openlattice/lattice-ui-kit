import Breadcrumbs from '..';
import { Card, CardSegment, CardStack } from '../../layout';

export default {
  title: 'Breadcrumbs',

  decorators: [
    (storyFn) => (
      <CardStack>
        <Card>
          <CardSegment vertical padding="sm">
            <a href="https://material-ui.com/components/breadcrumbs/">
              https://material-ui.com/components/breadcrumbs/
            </a>
            <p>
              This forwards the
              <code> &lt;Breadcrumbs /&gt; </code>
              {' '}
              component from Material-Ui.
            </p>
            <div>
              The default
              <code>separator</code>
              {' '}
              uses
              <code>faChevronRight</code>
            </div>
          </CardSegment>
        </Card>
        {storyFn()}
      </CardStack>
    ),
  ],
};

export const Default = () => (
  <Card>
    <CardSegment vertical padding="sm">
      <Breadcrumbs>
        <div>New Report</div>
        <div>Bruce Wayne</div>
      </Breadcrumbs>
    </CardSegment>
  </Card>
);

Default.story = {
  name: 'default',
};
