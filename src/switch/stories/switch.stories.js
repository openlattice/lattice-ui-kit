import React from 'react';

import { Switch } from '@material-ui/core';

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
