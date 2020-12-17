import React from 'react';

import Switch from '..';

export default {
  title: 'Switch',
  component: Switch,
};

export const Default = () => (
  <Switch />
);

export const Disabled = () => (
  <Switch disabled />
);
