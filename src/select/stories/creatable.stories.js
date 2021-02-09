import { action } from '@storybook/addon-actions';

import { REACT_SELECT_USAGE, stateOptions } from './constants';

import { Card, CardSegment } from '../../layout';
import { Creatable } from '../index';

export default {
  title: 'Creatable',
  component: Creatable,

  decorators: [
    (storyFn) => (
      <div>
        <a href="https://react-select.com/home">React-Select Documentation</a>
        <p>{REACT_SELECT_USAGE}</p>
        <Card>
          <CardSegment>{storyFn()}</CardSegment>
        </Card>
      </div>
    ),
  ],
};

export const Default = () => (
  <>
    <h1>Creatable Select</h1>
    <Creatable options={stateOptions} onChange={action('Single creatable changed')} />
    <h1>Creatable Multiple Select</h1>
    <Creatable options={stateOptions} onChange={action('Multiple creatable changed')} isMulti />
    <h1>Creatable Multiple Input (hideMenu)</h1>
    <Creatable hideMenu isMulti options={stateOptions} onChange={action('Borderless changed')} />
  </>
);
