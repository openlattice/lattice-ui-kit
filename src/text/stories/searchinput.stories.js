import React from 'react';

import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { SearchInput } from '..';

const StyledForm = styled.form`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
`;

export default {
  title: 'SearchInput',
};

export const Default = () => (
  <div>
    <h1>Search Input</h1>
    <Card>
      <CardSegment>
        <StyledForm>
          <Label htmlFor="story-stateless">Stateless</Label>
          <SearchInput id="story-stateless" />

          <Label htmlFor="story-disabled">Disabled</Label>
          <SearchInput defaultValue="OpenLattice" id="story-disabled" disabled />

          <Label htmlFor="story-placeholder">Placeholder</Label>
          <SearchInput id="story-placeholder" placeholder="OpenLattice" />

          <Label htmlFor="story-defaultvalue">Default value</Label>
          <SearchInput id="story-defaultvalue" defaultValue="OpenLattice" />

          <Label htmlFor="story-invalid">Invalid value</Label>
          <SearchInput error id="story-invalid" defaultValue="ecittaLnepO" />

          <Label htmlFor="story-width">Width</Label>
          <SearchInput id="story-width" defaultValue="ecittaLnepO" width="200px" />

          <Label htmlFor="story-eventhandlers">Event handlers (see Actions tab)</Label>
          <SearchInput
              id="story-eventhandlers"
              onChange={action('onChange')}
              onBlur={action('onBlur')}
              onFocus={action('onFocus')} />
        </StyledForm>
      </CardSegment>
    </Card>
  </div>
);
