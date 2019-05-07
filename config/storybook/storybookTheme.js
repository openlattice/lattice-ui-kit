import { create } from '@storybook/theming';
import { NEUTRALS } from '../../src/colors';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text color
  textColor: `${NEUTRALS[0]}`
});
