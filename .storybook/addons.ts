import '@storybook/addon-docs';
import 'storybook-dark-mode/register';
import { addons } from '@storybook/addons';
import execui from './execui';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  
});