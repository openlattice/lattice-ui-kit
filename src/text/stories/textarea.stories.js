import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { TextArea } from '..';

const StyledForm = styled.form`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
`;

export default {
  title: 'TextArea',
};

export const Default = () => (
  <div>
    <h1>TextArea</h1>
    <Card>
      <CardSegment>
        <StyledForm>
          <Label htmlFor="story-stateless">Stateless</Label>
          <TextArea id="story-stateless" />

          <Label htmlFor="story-disabled">Disabled</Label>
          <TextArea id="story-disabled" defaultValue="OpenLattice" disabled />

          <Label htmlFor="story-placeholder">Placeholder</Label>
          <TextArea id="story-placeholder" placeholder="OpenLattice" />

          <Label htmlFor="story-defaultvalue">Default value</Label>
          <TextArea id="story-defaultvalue" defaultValue="OpenLattice" />

          <Label htmlFor="story-invalid">Invalid value</Label>
          <TextArea error id="story-invalid" defaultValue="ecittaLnepO" />

          <Label htmlFor="story-width">Width</Label>
          <TextArea id="story-width" defaultValue="ecittaLnepO" width="200px" />

          <Label htmlFor="story-eventhandlers">Event handlers (see Actions tab)</Label>
          <TextArea
              id="story-eventhandlers"
              onChange={action('onChange')}
              onBlur={action('onBlur')}
              onFocus={action('onFocus')} />
        </StyledForm>
      </CardSegment>
    </Card>
  </div>
);
