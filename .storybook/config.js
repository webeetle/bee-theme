import React from 'react'
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/index';
import { withInfo } from '@storybook/addon-info'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator((story, context) => withInfo('usage')(story)(context))

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.mdx$/), module);
configure(require.context('../src/components', true, /\.stories\.js$/), module);

const decorator = storyFn => <ThemeProvider theme={theme}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }}>{storyFn()}</div>
</ThemeProvider>;
addDecorator(decorator);