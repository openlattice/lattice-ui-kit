import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { Input, SearchInput, TextArea } from '..';

const StyledForm = styled.form`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
`;

storiesOf('Text', module)
  .add('Input', () => (
    <div>
      <h1>
        Input
      </h1>
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
            <Input invalid id="story-invalid" defaultValue="ecittaLnepO" />

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
  ))
  .add('TextArea', () => (
    <div>
      <h1>
        TextArea
      </h1>
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
            <TextArea invalid id="story-invalid" defaultValue="ecittaLnepO" />

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
  ))
  .add('SearchInput', () => (
    <div>
      <h1>
        Search Input
      </h1>
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
            <SearchInput invalid id="story-invalid" defaultValue="ecittaLnepO" />

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
  ));
