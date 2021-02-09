import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { Input } from '..';

const StyledForm = styled.form`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
`;

export default {
  title: 'Input',
};

export const Default = () => (
  <div>
    <h1>Input</h1>
    <Card>
      <CardSegment>
        <StyledForm>
          <Label htmlFor="story-stateless">Stateless</Label>
          <Input id="story-stateless" />

          <Label htmlFor="story-disabled">Disabled</Label>
          <Input defaultValue="OpenLattice" id="story-disabled" disabled />

          <Label htmlFor="story-placeholder">Placeholder</Label>
          <Input id="story-placeholder" placeholder="OpenLattice" />

          <Label htmlFor="story-defaultvalue">Default value</Label>
          <Input id="story-defaultvalue" defaultValue="OpenLattice" />

          <Label htmlFor="story-invalid">Invalid value</Label>
          <Input error id="story-invalid" defaultValue="ecittaLnepO" />

          <Label htmlFor="story-width">Width</Label>
          <Input id="story-width" defaultValue="ecittaLnepO" width="200px" />

          <Label htmlFor="story-eventhandlers">Event handlers (see Actions tab)</Label>
          <Input
              id="story-eventhandlers"
              onChange={action('onChange')}
              onBlur={action('onBlur')}
              onFocus={action('onFocus')} />
        </StyledForm>
      </CardSegment>
    </Card>
  </div>
);
