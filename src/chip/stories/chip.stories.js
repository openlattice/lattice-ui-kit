import React from 'react';

import Chip from '../src/components/Chip';

export default {
  title: 'Chip',
  component: Chip,
};

export const Default = () => (
  <div>
    <Chip color="neutral" label="neutral" onDelete={() => {}} />
    <Chip color="purple" label="purple" onDelete={() => {}} />
    <Chip color="red" label="red" onDelete={() => {}} />
    <Chip color="red" label="red clickable" onDelete={() => {}} clickable />
    <Chip color="default" label="default" onDelete={() => {}} />
    <Chip color="primary" label="primary" onDelete={() => {}} />
    <Chip color="primary" label="primary" onDelete={() => {}} size="small" />
  </div>
);

export const Disabled = () => (
  <div>
    <Chip disabled label="disabled" />
  </div>
);
