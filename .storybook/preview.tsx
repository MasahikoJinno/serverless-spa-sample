import type { Preview } from '@storybook/react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { withRouter } from 'storybook-addon-react-router-v6'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import { theme } from '~/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withRouter,
    withThemeFromJSXProvider({
      themes: {
        light: theme
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline
    })
  ]
}

export default preview