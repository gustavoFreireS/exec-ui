import { addParameters } from '@storybook/react';
import '../stories/styles.css'

addParameters({
  previewTabs: {
    docs: {
      hidden: true
    },
    canvas: {
      title: 'Story',
      hidden: false,
    },
  },
})